import IconButton from '@/app/components/IconButton';
import Navbar from '@/app/components/Navbar';
import TestCard from '@/app/components/TestCard';

import { IoIosArrowForward } from 'react-icons/io';

const Page = () => {
  return (
    <div className="w-full h-screen">
      <Navbar />

      <div className="flex h-[calc(100vh-5rem)] pt-5 px-10 flex-col">
        <div className='w-full bg-white pt-8 mb-4 rounded-t-xl border-2'>
          <h1 className="font-bold text-4xl text-center text-custom-dark">
            Sprawdziany i kartkówki
          </h1>
          {/* Date swiper */}
          <div className="w-full flex items-center justify-center my-10 gap-6">
            {/* Back arrow */}
            <button className="rounded-full bg-light-blue flex items-center justify-center hover:bg-blue p-1">
              <IoIosArrowForward className="rotate-180 text-white text-2xl font-bold mx-auto" />
            </button>

            {/* Date */}
            <p className="text-2xl font-medium text-custom-dark">
              30.10 - 05.11
            </p>

            {/* Front arrow */}
            <button className="rounded-full bg-light-blue flex items-center justify-center hover:bg-blue p-1">
              <IoIosArrowForward className="text-white text-2xl font-bold" />
            </button>
          </div>
        </div>
        {/* days container */}
        <div className="scrollbar-thin scrollbar-thumb-custom-dark/40 scrollbar-track-gray-200 px-2 w-full flex flex-col overflow-y-auto gap-4">
          {/* single day container */}
          <div className="flex flex-col items-start">
            {/* day name */}
            <div className="bg-custom-dark/90 py-2 px-4 rounded-full">
              <p className="text-white font-semibold">08.11</p>
            </div>

            {/* Sprawdziany */}
            <div className="w-full">
              <TestCard
                testSubject="Matematyka"
                testName="Sprawdzian z wielomianów"
                testTeacher="Barbara Nowak"
                testDescription="Dział 1"
                testType="sprawdzian"
              />

              <TestCard
                testSubject="Historia"
                testName="2 Wojna Światowa"
                testTeacher="Tadeusz Wybicki"
                testDescription="Powtórz informację na temat 2 Wojny Światowej"
                testType="odpowiedź"
              />
            </div>
          </div>

          {/* single day container */}
          <div className="flex flex-col items-start">
            {/* day name */}
            <div className="bg-custom-dark/90 py-2 px-4 rounded-full">
              <p className="text-white font-semibold">09.11</p>
            </div>

            {/* Sprawdziany */}
            <div className="w-full">
              <TestCard
                testSubject="Język Polski"
                testName="Test z wiedzy z roku 1984"
                testTeacher="Agnieszka Kowalska"
                testDescription="Przeczytaj lekturę i utrwal wiadomości"
                testType="kartkówka"
              />
            </div>
          </div>

          {/* single day container */}
          <div className="flex flex-col items-start">
            {/* day name */}
            <div className="bg-custom-dark/90 py-2 px-4 rounded-full">
              <p className="text-white font-semibold">15.11</p>
            </div>

            {/* Sprawdziany */}
            <div className="w-full">
              <TestCard
                testSubject="Geografia"
                testName="Rzeki polski"
                testTeacher="Stefan Brzęczyszczykiewicz"
                testDescription="Mapa str. 189"
                testType="odpowiedź"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
