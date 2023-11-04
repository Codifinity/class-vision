import React from 'react';

import { BsSearch } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';
import IconButton from './IconButton';

export default function ChatModal({ closeClick }: { closeClick: () => void }) {
  return (
    <div className="w-full h-[calc(100vh-5rem)] absolute bg-gray-100 z-20 bg-opacity-80 backdrop-blur-sm">
      <div className="lg:w-3/5 w-11/12 bg-white h-4/6 my-16 m-auto rounded-xl">
        <div className="lg:text-3xl text-2xl w-11/12 mx-auto  py-8 font-bold flex flex-row justify-between items-center">
          <h3>Wybierz z listy</h3>

          <IconButton click={closeClick}>
            <AiOutlineClose />
          </IconButton>
        </div>
        <div className="flex items-center bg-white shadow-md rounded-full mx-auto w-11/12 py-2 lg:py-4 px-4 lg:px-6 gap-2">
          <div>
            <BsSearch />
          </div>
          <div className="w-full">
            <input
              type="text"
              placeholder="Wyszukaj nauczyciela"
              className="w-full outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
