'use client';
import * as React from 'react';

// Components
import Navbar from '../../components/Navbar';
import ProfilePicture from '../../components/ProfilePicture';
import ConversationCard from '../../components/ConversationCard';
import PinnedChat from '../../components/PinnedChat';
import IconButton from '@/app/components/IconButton';
import { useRouter } from 'next/navigation';

// Icons
import {
  BsFillPencilFill,
  BsSearch,
  BsFillCameraVideoFill,
  BsArrowLeftShort
} from 'react-icons/bs';
import { GrAttachment, GrEmoji } from 'react-icons/gr';
import { AiFillPhone, AiOutlineCamera, AiOutlineSwapRight } from 'react-icons/ai';
import { MdElectricalServices, MdSend } from 'react-icons/md';

//Hook
import useMediaQuery from '@/hooks/useMediaQuery';

// Firestore
import {auth, db} from "../../firebase"
import { collection, query, where, onSnapshot, setDoc, addDoc, orderBy } from 'firebase/firestore';
import { doc, updateDoc, getDoc, getDocs } from 'firebase/firestore';
import { Timestamp } from 'firebase/firestore';
import 'firebase/firestore';

interface User {
  id: string;
  [key: string]: any;
}

interface Role {
  name: string;
  users: User[];
}

const Page = () => {
  const [isChatOpen, setIsChatOpen] = React.useState<boolean>(false);
  const [chatContent, setChatContent] = React.useState<string>("");  
  const [messages, setMessages] = React.useState<any[]>();  
  const isMobile = useMediaQuery('(max-width: 1280px)');

  const [userData, setUserData] = React.useState<any>({});
  const [userData2, setUserData2] = React.useState<any>({});

  const [studentsData, setStudentsData] = React.useState<User[]>([]);
  const [parentsData, setParentsData] = React.useState<User[]>([]);
  const [teacherData, setTeacherData] = React.useState<User[]>([]);

  const { push } = useRouter()

  const toggleChatPlain = async(isOpen: boolean) => {
    setIsChatOpen(isOpen);
  };

  const toggleChat = async(isOpen: boolean, role:string, secondUserId:any) => {
    setIsChatOpen(isOpen);

    // get the user data from db
    const docRef = doc(db, "Users", "commonUsers", role, secondUserId);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) 
    {
      console.log("user exists");
      const data = docSnap.data();
      data.id = docSnap.id;

      // set the user in the state
      setUserData2(data);

      // check if the conversation exists
      const user = auth.currentUser;
      const convRef = doc(db, "conversations", (user?.uid + "_" + secondUserId));
      const convSnap = await getDoc(convRef);
  
      if(!convSnap.exists())
      {
        // if conversation does not exists - create a plain documet
        await setDoc(doc(db, "conversations", (user?.uid + "_" + secondUserId)), {});
        console.log("converstaion does not exist");
      }

      resetChatMessages(user?.uid, data.id);
    }
  };

  // load messages in chat
  const loadChat = async(user2id:any) => {
    const user = auth.currentUser;
    const docName = user?.uid + "_" + user2id;

    const docRef = doc(db, "conversations", docName);
    const docSnap = await getDoc(docRef);    

    if (docSnap.exists()) 
    {
      // if exists - get all document in messages subcollection
      const collectionRef = collection(db, "conversations", docName, "messages")
      const q = query(collectionRef, orderBy("timestamp"));
      const querySnapshot = await getDocs(q);
      
      let messages:any[] = [];

        querySnapshot.forEach((doc) => {    
          const data = doc.data();
          data.id = doc.id;
          messages.push(data);
      });

      setMessages(messages);
    }
  }

  const resetChatMessages = async(user1Id:any, user2Id:any) => {
    const docName = user1Id + "_" + user2Id;      

    const collectionRef = collection(db, "conversations", docName, "messages")
    const q = query(collectionRef, orderBy("timestamp"));
    const querySnapshot = await getDocs(q);

    let messages:any[] = [];

      querySnapshot.forEach((doc) => {      
        const data = doc.data();
        data.id = doc.id;
        messages.push(data);      
    });

    setMessages(messages);
  }

  const sendMessage = async() => {
    const user = auth.currentUser;
    const docName = user?.uid + "_" + userData2.id;                        
    await addDoc(collection(db, "conversations", docName, "messages",), {
      sender: user?.uid,
      content: chatContent,
      timestamp: Timestamp.now()
    })

    setChatContent("");
    resetChatMessages(user?.uid, userData2.id);
  }

  // get user with role 
  async function getUser(role:string)
  {
    const user = auth.currentUser;    
    if(user)
    {            
        const uid:any = user?.uid;
        const docRef = doc(db, "Users", "commonUsers", role, uid);

        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) 
        {                
          const data = docSnap.data();
          data.id = docSnap.id;

          setUserData(data);
          setUserData2(data);

          return JSON.stringify(data);
        }
    }    
  }

  const fetchUsers = async (
    role: string,
    setUser: React.Dispatch<React.SetStateAction<User[]>>
  ) => {
    const usersCollection = collection(
      db,
      'Users',
      'commonUsers',
      role
    );
  
    try {
      const snapshot = await getDocs(usersCollection);

      if (!snapshot.empty) {
        const userList: User[] = snapshot.docs.map((doc) => {
          const data = doc.data();
          const grades = data.grades || [];

          return {
            id: doc.id,
            class: data.class || '',
            email: data.email || '',
            grades,
            hasPasswordChanged: data.hasPasswordChanged || false,
            name: data.name || '',
            surname: data.surname || '',
            parent: data.parent || '',
            school: data.school || '',
          };
        });

        setUser(userList);
      } else {
        console.log(`No documents found for ${role}`);
      }
    } catch (error) {
      console.error(`Error fetching ${role} users:`, error);
    }
  };

  React.useEffect(() => {
    const checkIfUserIsLoggedAndGetUsers = async() => {
      const user = auth.currentUser;
      if(!user)
      {
        push("/login");
      }
      else
      {
        await getUser("Students").then(() => {
          fetchUsers('Students', setStudentsData);
          fetchUsers('Teachers', setTeacherData);
          fetchUsers('Parents', setParentsData);     
        });

        loadChat(auth.currentUser?.uid);      
      }
    }

    setTimeout(() => {
      checkIfUserIsLoggedAndGetUsers();
    }, 500);

  }, [push]);

  return (
    <div className="w-full h-screen">
      <Navbar />

      <div className="flex h-[calc(100vh-5rem)]">
        {/* Sidebar */}
        <div
          className={`${
            isMobile && isChatOpen ? 'hidden' : 'flex'
          } w-full lg:w-1/4 bg-light-gray px-8 py-6 flex-col gap-8`}
        >
          {/* Logged user */}
          <div className="flex w-full items-center gap-4 px-4 py-2">
            {/* Profile pic */}
            <div className="flex-3">
              <ProfilePicture src="/preview-pic.jpg" alt="Profile picture" />
            </div>

            {/* User info */}
            <div className=" flex-1">
              {/* Imie nazwisko */}
              <h1 className="text-blue text-2xl lg:text-4xl font-bold">
                { userData['name'] + " " + userData['surname']}
              </h1>
              {/* opis */}
              <p className="text-gray-500 text-xs lg:text-md">Lorem ipsum</p>
            </div>

            {/* Edit profile */}
            <div className="flex-2 -mt-4">
              <IconButton>
                <BsFillPencilFill className="text-custom-dark text-[1em] lg:text-[1.4em]" />
              </IconButton>
            </div>
          </div>

          {/* Search bar */}
          <div className="flex items-center bg-white shadow-md rounded-full py-2 lg:py-4 px-4 lg:px-6 gap-2">
            <div>
              <BsSearch />
            </div>
            <div className="bg-red-100 w-full">
              <input
                type="text"
                placeholder="Wyszukaj nauczyciela"
                className="w-full outline-none"
              />
            </div>
          </div>

          {/* Chats */}
          <div className="scrollbar-thin scrollbar-thumb-custom-dark/40 scrollbar-track-gray-200 overflow-y-scroll">        
          {/* <PinnedChat
              click={() => toggleChat(true)}
              src="/wycieczki-preview.jpg"
              name="Wycieczki"
              lastMessageUserName="Małgorzata"
              lastMessage="O której zbiórka?"
              lastMessageTime="16:34"/> */}              
            {studentsData.map((student, index) => {
            return(
              <ConversationCard
              key={student.id}
              click={() => toggleChat(true, "Students", student.id)}
              src="/preview-pic.jpg"
              name={student.name}
              surname={student.surname}
              lastMessage="Cześć John Doe, jutro kontrola, nie przynos niczego"
              lastMessageTime="16:34"            
              />)
            })}

            {parentsData.map((parent) => {
            return (
              <ConversationCard 
              key={parent.id}
              click={() => toggleChat(true, "Parents", parent.id)}
              src="/preview-pic.jpg"
              name={parent.name}
              surname={parent.name}
              lastMessage="Cześć John Doe, wyrzuć śmieci"
              lastMessageTime="16:34"
              />)
            })}

          {teacherData.map((teacher) => {
            return (
              <ConversationCard
              key={teacher.id}
              click={() => toggleChat(true, "Teachers", teacher.id)}
              src="/preview-pic.jpg"
              name={teacher.name}
              surname={teacher.surname}
              lastMessage="Cześć John Doe, prześlij mi swój projekt zegar w react"
              lastMessageTime="16:34"
              />)
            })}
          </div>
        </div>

        {/* Conversation */}
        <div
          className={`w-full lg:w-3/4 h-full bg-white flex-col px-4 lg:px-8 py-2 lg:py-6 gap-4 ${
            isMobile && isChatOpen ? 'flex' : isMobile ? 'hidden' : 'flex'
          }`}
        >
          {/* Conversation target user */}
          <div className="w-full flex items-center justify-between border-b-2 border-custom-dark/30 pb-4 lg:px-4 flex-4">
            {/* Picture, name */}
            <div className="flex items-center gap-2 lg:gap-4">
              {isMobile && (
                <button onClick={() => toggleChatPlain(false)}>
                  <BsArrowLeftShort className="text-[2em] font-bold text-blue" />
                </button>
              )}
              <ProfilePicture
                src="/preview-pic.jpg"
                alt="Conversation profile picture"
              />
              <h2 className="text-gray-500 text-xl lg:text-4xl font-bold">
                {userData2['name'] + " " + userData2['surname']}
              </h2>
            </div>

            {/* Upper buttons */}
            <div className="flex items-center gap-2">
              <button className="p-2 rounded-md hover:bg-gray-200 self-end">
                <AiFillPhone className="text-blue rotate-90 text-[1.2em] lg:text-[2em]" />
              </button>

              <button className="p-2 rounded-md hover:bg-gray-200 self-end ">
                <BsFillCameraVideoFill className="text-blue text-[1.2em] lg:text-[2em]" />
              </button>
            </div>
          </div>

          {/* Chatbox */}
          <div className="bg-light-gray rounded-sm w-full flex-1 p-10">
            {messages?.map((el) => {
              return (                
                (userData.id == el.sender) ? (
                  <div className='w-full flex items-center justify-end' key={el.id}>
                    <p className="py-2 px-3 my-[1px] rounded-s-lg rounded-t-lg bg-blue text-white">{el.content}</p>
                  </div>
                ):
                (
                  <div className='flex items-center justify-start'>
                    <p className="my-[1px] py-2 px-3 rounded-e-lg rounded-t-lg bg-gray-300 text-black" key={el.id}>{el.content}</p>
                  </div>
                )
              )
            })}
          </div>

          {/* Message writing box */}
          <div className="w-full flex-4">
            <div className="w-full border-t-2 border-custom-dark/30 pt-4 lg:px-4">
              <div className="bg-light-gray rounded-full w-full overflow-hidden flex items-center py-2 px-4 gap-2">
                {/* Text input */}
                <div className="flex-1">
                  <input
                    onChange={(e) => setChatContent(e.target.value)}
                    value={chatContent}
                    type="text"
                    className="w-full outline-none py-2 bg-light-gray "
                    placeholder="Aa"                    
                  />
                </div>

                {/* cta button icons */}
                <div className="flex-4 flex items-center">
                  <IconButton>
                    <GrAttachment className="text-[1em] lg:text=[1.4em]" />
                  </IconButton>

                  <IconButton>
                    <AiOutlineCamera className="text-[1em] lg:text=[1.4em]" />
                  </IconButton>

                  <IconButton>
                    <GrEmoji className="text-[1em] lg:text=[1.4em]" />
                  </IconButton>
                </div>

                {/* send button */}
                <div className="flex-4">
                  <button className="bg-blue hover:bg-light-blue rounded-full p-2" onClick={() => {sendMessage()}}>
                    <MdSend size="1.4em" className="text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
