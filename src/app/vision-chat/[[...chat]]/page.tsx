import Navbar from '../../components/Navbar';

import {
  BsFillPencilFill,
  BsSearch,
  BsFillCameraVideoFill
} from 'react-icons/bs';
import { GrAttachment, GrEmoji } from 'react-icons/gr';
import { AiFillPhone, AiOutlineCamera } from 'react-icons/ai';
import { MdSend } from 'react-icons/md';
import ProfilePicture from '../../components/ProfilePicture';
import ConversationCard from '../../components/ConversationCard';
import PinnedChat from '../../components/PinnedChat';
import IconButton from '@/app/components/IconButton';

const Page = () => {
  return (
    <div className="w-full h-screen">
      <Navbar />

      <div className="flex h-[calc(100vh-5rem)]">
        {/* Sidebar */}
        <div className="w-1/4 bg-light-gray px-8 py-6 flex flex-col gap-8">
          {/* Logged user */}
          <div className="flex w-full items-center gap-4 px-4 py-2">
            {/* Profile pic */}
            <div className="flex-3">
              <ProfilePicture src="/preview-pic.jpg" alt="Profile picture" />
            </div>

            {/* User info */}
            <div className=" flex-1">
              {/* Imie nazwisko */}
              <h1 className="text-blue text-4xl font-bold">John Doe</h1>
              {/* opis */}
              <p className="text-gray-500 text-md">Lorem ipsum</p>
            </div>

            {/* Edit profile */}
            <div className="flex-2 -mt-4">
              <IconButton>
                <BsFillPencilFill size="1.4em" className="text-custom-dark" />
              </IconButton>
            </div>
          </div>

          {/* Search bar */}
          <div className="flex items-center bg-white shadow-md rounded-full py-4 px-6 gap-2">
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
            {/* Pinned chats */}
            <PinnedChat
              src="/wycieczki-preview.jpg"
              name="Wycieczki"
              lastMessageUserName="Małgorzata"
              lastMessage="O której zbiórka?"
              lastMessageTime="16:34"
            />
            {/* User chats */}
            <ConversationCard
              src="/preview-pic.jpg"
              name="Nauczyciel"
              surname="1"
              lastMessage="Pani syn niestety nie zdał,
ale za to zrobił to z wielką gracją"
              lastMessageTime="16:34"
            />

            <ConversationCard
              src="/preview-pic.jpg"
              name="Nauczyciel"
              surname="1"
              lastMessage="Pani syn niestety nie zdał,
ale za to zrobił to z wielką gracją"
              lastMessageTime="16:34"
            />

            <ConversationCard
              src="/preview-pic.jpg"
              name="Nauczyciel"
              surname="1"
              lastMessage="Pani syn niestety nie zdał,
ale za to zrobił to z wielką gracją"
              lastMessageTime="16:34"
            />

            <ConversationCard
              src="/preview-pic.jpg"
              name="Nauczyciel"
              surname="1"
              lastMessage="Pani syn niestety nie zdał,
ale za to zrobił to z wielką gracją"
              lastMessageTime="16:34"
            />

            <ConversationCard
              src="/preview-pic.jpg"
              name="Nauczyciel"
              surname="1"
              lastMessage="Pani syn niestety nie zdał,
ale za to zrobił to z wielką gracją"
              lastMessageTime="16:34"
            />

            <ConversationCard
              src="/preview-pic.jpg"
              name="Nauczyciel"
              surname="1"
              lastMessage="Pani syn niestety nie zdał,
ale za to zrobił to z wielką gracją"
              lastMessageTime="16:34"
            />

            <ConversationCard
              src="/preview-pic.jpg"
              name="Nauczyciel"
              surname="1"
              lastMessage="Pani syn niestety nie zdał,
ale za to zrobił to z wielką gracją"
              lastMessageTime="16:34"
            />
          </div>
        </div>

        {/* Conversation */}
        <div className="w-3/4 h-full bg-white flex flex-col px-8 py-6 gap-4">
          {/* Conversation target user */}
          <div className="w-full flex items-center justify-between border-b-2 border-custom-dark/30 pb-4 px-4 flex-4">
            {/* Picture, name */}
            <div className="flex items-center gap-4">
              <ProfilePicture
                src="/preview-pic.jpg"
                alt="Conversation profile picture"
              />
              <h2 className="text-gray-500 text-4xl font-bold">Nauczyciel 1</h2>
            </div>

            {/* Upper buttons */}
            <div className="flex items-center gap-2">
              <button className="p-2 rounded-md hover:bg-gray-200 self-end">
                <AiFillPhone size="2em" className="text-blue rotate-90" />
              </button>

              <button className="p-2 rounded-md hover:bg-gray-200 self-end">
                <BsFillCameraVideoFill size="2em" className="text-blue" />
              </button>
            </div>
          </div>

          {/* Chatbox */}
          <div className="bg-red-200 w-full flex-1">chat</div>

          {/* Message writing box */}
          <div className="w-full flex-4">
            <div className="w-full border-t-2 border-custom-dark/30 pt-4 px-4">
              <div className="bg-light-gray rounded-full w-full overflow-hidden flex items-center py-2 px-2 gap-2">
                {/* Text input */}
                <div className="flex-1">
                  <input
                    type="text"
                    className="w-full outline-none py-2 bg-light-gray "
                    placeholder="Aa"
                  />
                </div>

                {/* cta button icons */}
                <div className="flex-4">
                  <IconButton>
                    <GrAttachment size="1.4em" />
                  </IconButton>

                  <IconButton>
                    <AiOutlineCamera size="1.4em" />
                  </IconButton>

                  <IconButton>
                    <GrEmoji size="1.4em" />
                  </IconButton>
                </div>

                {/* send button */}
                <div className="flex-4">
                  <button className="bg-blue hover:bg-light-blue rounded-full p-2">
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
