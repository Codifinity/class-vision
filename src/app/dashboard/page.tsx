import * as React from 'react';

import Navbar from "../components/Navbar";
import RegisterModal from "../components/RegisterModal";
import WelcomeSection from "../components/WelcomeSection";
import Timetable from '../components/Timetable';

export default function Page() {

  return (
    <div className="w-full">
      <Navbar />
      {/* MODAL ZMIANY HASLA */}
      {/* <RegisterModal/> */}
      <div className='w-10/12 mx-auto'>
        <div className='flex lg:flex-row flex-col justify-between items-start my-6'>
          <WelcomeSection />
          <Timetable />
        </div>
      </div>
    </div>
  );
}
