'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';

import Navbar from '../components/Navbar';
import RegisterModal from '../components/RegisterModal';
import WelcomeSection from '../components/WelcomeSection';
import Timetable from '../components/Timetable';
import LastGrades from '../components/LastGrades';
import ExamsSchedule from '../components/ExamsSchedule';
import { FallingLines } from 'react-loader-spinner';

import { db, auth } from '../firebase';
import {
  doc,
  collection,
  getDoc,
  getDocs,
  query,
  where
} from 'firebase/firestore';

export default function Page() {
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [userData, setUserData] = React.useState<any>({ name: '...' });
  const [grades, setGrades] = React.useState<[{ id: string; subject: string; type: string; mark: string }]>([{ id: '', subject: '', type: '', mark: '' }]);
  const { push } = useRouter();

  React.useEffect(() => {
    auth.onAuthStateChanged(async(user:any) => {
      if(user)
      {
        // get the user data
        const docRef = doc(db, "Users", user?.uid);
        const docSnap = await getDoc(docRef);
        let data:any = {role: "", school: ""};

        if (docSnap.exists())
        {
          data    = docSnap.data();
          data.id = docSnap.id;

          setUserData(data);
        }

        // get the grades of user
        if (data.role == 'Students') 
        {
          const gradesQuery = query(collection(db, 'Schools', data['school'], 'Grades'), where("student", "==", user?.uid));
          const gradesSnap = await getDocs(gradesQuery);
          let grades: [
            { id: string; subject: string; type: string; mark: string }
          ] = [{ id: '', subject: '', type: '', mark: '' }];
          let i = 0;

          gradesSnap.forEach(el => {
            const data = el.data();
            let grade: any = { id: '', subject: '', type: '', mark: '' };

            grade.id = el.id;
            grade.subject = data['subject'];
            grade.type = data['type'];
            grade.mark = data['mark'];

            grades[i] = grade;
            i++;
          })

          setGrades(grades);
        }

        setIsLoading(false);
      }
      else
      {
        push("/login");
      }
    })
  }, [push]);

  if (isLoading === true) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <FallingLines
          color="#00A7EE"
          width="100"
          visible={true}
          aria-label="falling-lines-loading"
        />
      </div>
    );
  }

  return (
    <div className="w-full">
      <Navbar />
      <RegisterModal />
      <div className="w-full lg:w-11/12 flex mx-auto flex-col lg:flex-row my-4 gap-4 lg:gap-2 px-4">
        <div className="flex flex-col lg:w-2/3 w-full justify-between gap-4 lg:gap-2 ">
          <WelcomeSection userName={userData['name']} />

          <div className="grid gap-4 lg:gap-2 grid-cols-1 lg:grid-cols-2 w-full h-full">
            <LastGrades grades={grades} />
            <ExamsSchedule />
          </div>
        </div>

        <div className="lg:w-1/3 w-full">
          <Timetable />
        </div>
      </div>
    </div>
  );
}
