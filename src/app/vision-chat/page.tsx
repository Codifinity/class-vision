import Image from 'next/image';
import Navbar from '../components/Navbar';

import { BsFillPencilFill, BsSearch } from 'react-icons/bs';
import ProfilePicture from '../components/ProfilePicture';
import ConversationCard from '../components/ConversationCard';

// import profilePicture from './preview-pic.jpg'

const Page = () => {
  return (
    <div className="w-full h-screen">
      <Navbar />

      <div className="flex h-[calc(100vh-5rem)]">
        {/* Sidebar */}
        <div className="w-2/7 bg-light-gray px-8 py-6 flex flex-col gap-8">
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
              <button className="p-2 rounded-md hover:bg-gray-200 self-end">
                <BsFillPencilFill size="1.4em" className="text-custom-dark" />
              </button>
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

          {/* Users list */}
          <div className="scrollbar-thin scrollbar-thumb-custom-dark/40 scrollbar-track-gray-200 overflow-y-scroll">
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

        {/* Chat */}
        <div className="w-5/7 bg-white h-full"></div>
      </div>
    </div>
  );
};

export default Page;
