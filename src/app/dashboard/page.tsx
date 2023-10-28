'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';

import Navbar from '../components/Navbar';
import RegisterModal from '../components/RegisterModal';
import WelcomeSection from '../components/WelcomeSection';
import Timetable from '../components/Timetable';
import LastGrades from '../components/LastGrades';
import ExamsSchedule from '../components/ExamsSchedule';

import {auth} from "../firebase"

export default function Page() {
  const { push } = useRouter()
  
  React.useEffect(() => {
    const user = auth.currentUser;
    
    if(!user)
    {
      push("/login");
    }
  }, [])
  
  return (
    <div className="w-full">
      <Navbar />
      <RegisterModal />
      <div className="w-10/12 mx-auto">
        <div className="flex lg:flex-row flex-col justify-between items-start my-6">
          <div className="w-full lg:w-auto">
            <WelcomeSection />
            <div className="flex lg:flex-row flex-col lg:ml-10 lg:justify-between items-start justify-center w-full mt-4 lg:gap-10 gap-5">
              <LastGrades />
              <ExamsSchedule />
            </div>
          </div>
          <Timetable />
        </div>
      </div>
    </div>
  );
}
