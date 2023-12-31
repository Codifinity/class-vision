import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import DropdownArrow from '../../assets/dropdown.svg';
import Image from 'next/image';

const subjects = [
  { name: 'Wszystkie' },
  { name: 'Język polski' },
  { name: 'Język niemiecki' },
  { name: 'Geografia' },
  { name: 'Fizyka' },
  { name: 'Matematyka' }
];

interface DropDownProps {
  callback:any;
}

export default function Dropdown({callback} : DropDownProps) {
  const [selected, setSelected] = useState(subjects[0]);
  const [open, setOpen] = useState(true);

  return (
    <div className=" w-72">
      <Listbox value={selected} onChange={(e) => {setSelected({"name" : e.name}); callback(e.name)}}>
        <div className="relative mt-1">
          <Listbox.Button onClick={() => setOpen(!open)} className="relative w-full cursor-default rounded-lg bg-white border-[1px] border-black py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate">{selected.name}</span>
            <span
              className={
                'pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2 '
              }
            >
              {open ? (
                <div>
                  <Image src={DropdownArrow} alt="" />
                </div>
              ) : (
                <div className="rotate-180">
                  <Image src={DropdownArrow} alt="" />
                </div>
              )}
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
              {subjects.map((subject, subjectIdx) => (
                <Listbox.Option
                  key={subjectIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-blue/40 text-dark-blue' : 'text-gray-900'
                    }`
                  }
                  value={subject}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`} onClick={() => setOpen(!open)}
                      >
                        {subject.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600"></span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
