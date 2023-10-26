import * as React from 'react';

import Navbar from "../components/Navbar";
import RegisterModal from "../components/RegisterModal";
import WelcomeSection from "../components/WelcomeSection";
import Timetable from '../components/Timetable';
import LastGrades from '../components/LastGrades';

export default function Page() {

  return (
    <div className="w-full">
      <Navbar />
      {/* MODAL ZMIANY HASLA */}
      {/* <RegisterModal/> */}
      <div className='w-10/12 mx-auto'>
        <div className='flex lg:flex-row flex-col justify-between items-start my-6'>
          <div className='w-full lg:w-auto'>
            <WelcomeSection />
            <div>
              <LastGrades />
            </div>
          </div>
          <Timetable />
        </div>
      </div>
    </div>
  );
}
