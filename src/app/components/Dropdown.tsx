/* eslint-disable jsx-a11y/role-has-required-aria-props */
import React, { useState } from 'react';
import DropdownArrow from '../../assets/dropdown.svg';
import Image from 'next/image';

const Dropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex justify-between w-full rounded-md border border-[#3D3D3D] shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
          id="options-menu"
          aria-expanded={isOpen}
          aria-haspopup="listbox"
        >
          Wybierz przedmiot
          <Image
            className={`ml-2 mt-0.5 transition-transform transform ${
              isOpen ? '-rotate-180' : 'rotate-0'
            }`}
            src={DropdownArrow}
            alt="Arrow"
            width={16}
            height={16}
          />
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            role="listbox"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <div role="option" onClick={() => setIsOpen(false)}>
              <div className="p-2 text-gray-700 cursor-pointer hover:bg-gray-100">
                Matematyka
              </div>
            </div>
            <div role="option" onClick={() => setIsOpen(false)}>
              <div className="p-2 text-gray-700 cursor-pointer hover:bg-gray-100">
                Język polski
              </div>
            </div>
            <div role="option" onClick={() => setIsOpen(false)}>
              <div className="p-2 text-gray-700 cursor-pointer hover:bg-gray-100">
                Historia
              </div>
            </div>
            <div role="option" onClick={() => setIsOpen(false)}>
              <div className="p-2 text-gray-700 cursor-pointer hover:bg-gray-100">
                Geografia
              </div>
            </div>
            <div role="option" onClick={() => setIsOpen(false)}>
              <div className="p-2 text-gray-700 cursor-pointer hover:bg-gray-100">
                Język angielski
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
