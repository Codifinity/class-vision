import Navbar from '../components/Navbar';
import React from 'react';

import { IoIosArrowForward } from 'react-icons/io';

export default function attendance() {
  return (
    <section className="w-full">
      <Navbar />
      <div className="border-[#B4B4B4] border-[1px] rounded-lg my-10 m-auto lg:mx-10 mx-3 flex h-full flex-col pb-8">
        <div className='bg-white rounded-t-lg pt-8 px-10 border-b-2'>
          <h1 className="font-bold text-center lg:text-4xl text-3xl text-custom-dark">
            Frekwencja
          </h1>
          <div className="w-full flex items-center justify-center my-10 gap-6">
            <button className="rounded-full bg-light-blue flex items-center justify-center hover:bg-blue p-1">
              <IoIosArrowForward className="rotate-180 text-white text-2xl font-bold mx-auto" />
            </button>
            <p className="lg:text-3xl text-2xl font-medium text-custom-dark">
              Piątek, 03.11
            </p>
            <button className="rounded-full bg-light-blue flex items-center justify-center hover:bg-blue p-1">
              <IoIosArrowForward className="text-white text-2xl font-bold" />
            </button>
          </div>
        </div>
        <div className="bg-white w-[95%] mx-auto h-auto flex flex-row mt-5 mb-1 px-3 py-4 rounded-lg">
          <div className="rounded-full bg-[#6FEFC1] flex items-center w-12 lg:h-auto mt-3 md:mt-1 lg:mt-0 h-max lg:text-3xl text-2xl justify-center hover:bg-blue text-white p-1">
            1
          </div>
          <div className="grid grid-cols-1">
            <div className="flex flex-row lg:mr-10 font-semibold lg:text-lg text-md lg:ml-10 ml-5">
              Język polski
            </div>
            <div className="lg:mr-10 lg:text-sm text-xs lg:ml-10 ml-5">
              Obecność
            </div>
          </div>
        </div>

        <div className="bg-white w-[95%] mx-auto h-auto flex flex-row my-1 px-3 py-4 rounded-lg">
          <div className="rounded-full bg-[#E40000] flex items-center w-12 lg:h-auto mt-3 md:mt-1 lg:mt-0 h-max lg:text-3xl text-2xl justify-center hover:bg-blue text-white p-1">
            2
          </div>
          <div className="grid grid-cols-1">
            <div className="flex flex-row lg:mr-10 font-semibold lg:text-lg text-md lg:ml-10 ml-5">
              Matematyka
            </div>
            <div className="lg:mr-10 lg:text-sm text-xs lg:ml-10 ml-5">
              Nieobecność
            </div>
          </div>
        </div>

        <div className="bg-white w-[95%] mx-auto h-auto flex flex-row my-1 px-3 py-4 rounded-lg">
          <div className="rounded-full bg-[#00BBE4] flex items-center w-12 lg:h-auto mt-3 md:mt-1 lg:mt-0 h-max lg:text-3xl text-2xl justify-center hover:bg-blue text-white p-1">
            3
          </div>
          <div className="grid grid-cols-1">
            <div className="flex flex-row lg:mr-10 font-semibold lg:text-lg text-md lg:ml-10 ml-5">
              Wychowanie fizyczne
            </div>
            <div className="lg:mr-10 lg:text-sm text-xs lg:ml-10 ml-5">
              Nieznany
            </div>
          </div>
        </div>

        <div className="bg-white w-[95%] mx-auto h-auto flex flex-row my-1 px-3 py-4 rounded-lg">
          <div className="rounded-full bg-[#00BBE4] flex items-center w-12 lg:h-auto mt-3 md:mt-1 lg:mt-0 h-max lg:text-3xl text-2xl justify-center hover:bg-blue text-white p-1">
            4
          </div>
          <div className="grid grid-cols-1">
            <div className="flex flex-row lg:mr-10 font-semibold lg:text-lg text-md lg:ml-10 ml-5">
              Fizyka
            </div>
            <div className="lg:mr-10 lg:text-sm text-xs lg:ml-10 ml-5">
              Nieznany
            </div>
          </div>
        </div>

        <div className="bg-white w-[95%] mx-auto h-auto flex flex-row my-1 px-3 py-4 rounded-lg">
          <div className="rounded-full bg-[#00BBE4] flex items-center w-12 lg:h-auto mt-3 md:mt-1 lg:mt-0 h-max lg:text-3xl text-2xl justify-center hover:bg-blue text-white p-1">
            5
          </div>
          <div className="grid grid-cols-1">
            <div className="flex flex-row lg:mr-10 font-semibold lg:text-lg text-md lg:ml-10 ml-5">
              Biologia
            </div>
            <div className="lg:mr-10 lg:text-sm text-xs lg:ml-10 ml-5">
              Nieznany
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
