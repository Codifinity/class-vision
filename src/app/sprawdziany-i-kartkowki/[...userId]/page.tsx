import IconButton from '@/app/components/IconButton';
import Navbar from '@/app/components/Navbar';
import TestCard from '@/app/components/TestCard';

import { IoIosArrowForward } from 'react-icons/io';

const Page = () => {
  return (
    <div className="w-full h-screen">
      <Navbar />

      <div className="flex h-[calc(100vh-5rem)] pt-5 px-10 flex-col">
        <h1 className="font-bold text-4xl text-center text-custom-dark">
          Sprawdziany i kartkówki
        </h1>

        {/* Date action bar */}
        <div className="w-full flex items-center justify-center my-10 gap-6">
          {/* Back arrow */}
          <button className="rounded-full bg-light-blue flex items-center justify-center hover:bg-blue p-1">
            <IoIosArrowForward className="rotate-180 text-white text-2xl font-bold mx-auto" />
          </button>

          {/* Date */}
          <p className="text-2xl font-medium text-custom-dark">30.10 - 05.11</p>

          {/* Front arrow */}
          <button className="rounded-full bg-light-blue flex items-center justify-center hover:bg-blue p-1">
            <IoIosArrowForward className="text-white text-2xl font-bold" />
          </button>
        </div>

        {/* days container */}
        <div className="w-full flex flex-col">
          {/* single day container */}
          <div>
            {/* day name */}
            <div>
              <p>03.11</p>
            </div>

            {/* Sprawdziany */}
            <TestCard
              testSubject="Matematyka"
              testName="Wielomiany"
              testTeacher="John Doe"
              testDescription="Podrecznik strona 238"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;