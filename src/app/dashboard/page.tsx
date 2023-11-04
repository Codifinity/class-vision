'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';

import Navbar from '../components/Navbar';
import RegisterModal from '../components/RegisterModal';
import WelcomeSection from '../components/WelcomeSection';
import Timetable from '../components/Timetable';
import LastGrades from '../components/LastGrades';
import ExamsSchedule from '../components/ExamsSchedule';

import {db, auth} from "../firebase"
import { doc, collection, getDoc, getDocs, query, where, limit } from 'firebase/firestore';

export default function Page() {
  const [userData, setUserData] = React.useState<any>({name: "..."});
  const [grades, setGrades]     = React.useState<[{id: string, subject: string, type: string, mark: string}]>([{id: '', subject: '', type: '', mark: '' }])
  const { push } = useRouter()
  
  React.useEffect(() => {      
    auth.onAuthStateChanged(async(user:any) => {
      if(user)
      {
        // get the role of user
        const q             = query(collection(db, "UserRole"), where("userID", "==", user?.uid));
        const querySnapshot = await getDocs(q);
        let role:string     = "";
        querySnapshot.forEach((doc) => {
          role = doc.data()['role'];
        })

        // get the user data
        const docRef  = doc(db, "Users", "commonUsers", role, user?.uid);
        const docSnap = await getDoc(docRef);
        let data:any  = {"school" : ""}
        if(docSnap.exists())
        {
          data    = docSnap.data();
          data.id = docSnap.id;

          setUserData(data);
        }

        // get the grades of user
        if(role == "Students")
        {
          const gradesQuery = query(collection(db, "Schools", data['school'], "Grades"), where("student", "==", user?.uid));
          const gradesSnap  = await getDocs(gradesQuery);
          let grades:[{id: string, subject: string, type: string, mark: string}] = [{id: "", subject: "", type: "", mark: ""}];
          let i = 0;

          gradesSnap.forEach((el) => {
            const data    = el.data();
            let grade:any= {id: "", subject: "", type: "", mark:""};

            grade.id      = el.id;
            grade.subject = data['subject'];
            grade.type    = data['type'];
            grade.mark    = data['mark'];
            
            grades[i] = grade;
            i++;
          })          

          if(grades[0].id != "")
            setGrades(grades);
        }
      }
      else
      {
        push("login");
      }
    })
  }, [push])

  return (
    <div className="w-full">
      <Navbar />
      <RegisterModal />
      <div className="w-10/12 mx-auto">
        <div className="flex lg:flex-row flex-col justify-between items-start my-6">
          <div className="w-full lg:w-2/3">
            <WelcomeSection userName={userData['name']}/>

            <div className="flex lg:flex-row flex-col lg:justify-between items-start justify-center 2xl:w-[70rem] w-full mt-4 lg:gap-10 2xl:gap-5 gap-5">
              <LastGrades grades={grades}/>
              <ExamsSchedule />
            </div>

          </div>
          <Timetable />
        </div>
      </div>
    </div>
  );
}
