'use client';

import * as React from 'react';
import Navbar from '../components/Navbar';
import Dropdown from '../components/Dropdown';
import { useRouter } from 'next/navigation';

import { db, auth } from '../firebase';
import {
  doc,
  collection,
  getDoc,
  getDocs,
  query,
  where,
  QuerySnapshot,
  Query
} from 'firebase/firestore';
import { setRequestMeta } from 'next/dist/server/request-meta';
import { setDefaultAutoSelectFamilyAttemptTimeout } from 'net';
import { FallingLines } from 'react-loader-spinner';

interface GradesObjectProps {
  id: string;
  subject: string;
  type: string;
  grade: string;
}

let subjects = [
  'Matematyka',
  'Język polski',
  'Historia',
  'Geografia',
  'Fizyka',
  'Chemia',
  'Język angielski',
  'Biologia',
  'Język niemiecki'
];

export default function Page() {
  const { push } = useRouter();
  const [allGrades, setAllGrades] = React.useState<
    [{ id: string; subject: string; type: string; grade: string }]
  >([{ id: '', subject: '', type: '', grade: '' }]);
  const [grades, setGrades] = React.useState<
    [{ id: string; subject: string; type: string; grade: string }]
  >([{ id: '', subject: '', type: '', grade: '' }]);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  const loadGrades = async (subjectName: string) => {
    if (subjectName == 'Wszystkie') {
      setGrades(allGrades);
    } else {
      let newGrades: [
        { id: string; subject: string; type: string; grade: string }
      ] = [{ id: '', subject: '', type: '', grade: '' }];

      let i = 0;

      allGrades.forEach((el) => {
        if(el.subject == subjectName)
        newGrades[i] = el;
      })
      

      setGrades(newGrades);
    }
  };

  React.useEffect(() => {

    auth.onAuthStateChanged(async(user:any) => {
      if(user)
      {
        // get the user data
        const docRef  = doc(db, "Users", user?.uid);
        const docSnap = await getDoc(docRef);
        let data:any  = {role: "", school : ""}
        if(docSnap.exists())
        {
          const data_in  = docSnap.data();
          data.school    = data_in['school'];
          data.role      = data_in['role'];

        }
        
        // get the grades of user

        if(data.role == "Students")
        {
          const gradesQuery = query(collection(db, 'Schools', data['school'], 'Grades'), where("student", "==", user?.uid));
          const gradesSnap  = await getDocs(gradesQuery);
          let grades:[{id: string, subject: string, type: string, grade: string}] = [{id: "", subject: "", type: "", grade: ""}];

          let i = 0;

          gradesSnap.forEach(el => {
            const data = el.data();
            let grade: any = { id: '', subject: '', type: '', grade: '' };

            grade.id = el.id;
            grade.subject = data['subject'];
            grade.type = data['type'];
            grade.grade = data['mark'];

            grades[i] = grade;
            i++;

          })


          setGrades(grades);
          setAllGrades(grades);
        }
        setIsLoading(false);
      } else {
        push('login');
      }
    });
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
      <section className="border-[#B4B4B4] border-[1px] rounded-lg lg:w-auto lg:mx-5 my-3 w-auto mx-2 min-h-[30rem] shadow-md">
        <div className="w-full flex md:flex-row flex-col justify-between items-center">
          <h3 className="font-semibold text-4xl pt-7 px-8">Oceny</h3>
          <div className="md:mx-5 mx-0 md:pt-0 pt-3">
            <Dropdown callback={loadGrades} />
          </div>
        </div>
        <div className="px-4 pt-5 pb-10">
          <Grades names={subjects} grades={grades} />
        </div>
      </section>
    </div>
  );
}
interface GradesProps {
  grades: GradesObjectProps[];
  names: string[];
}

const Grades = ({ names, grades }: GradesProps) => {
  if (grades[0].id === '' || grades === undefined || grades === null) {
    return (
      <div className="mx-3 my-2 mt-4">
        <p className="text-2xl font-bold">Brak ocen</p>
      </div>
    );
  }
  console.log(grades);
  return (
    <>
      {names.map((name, nameId) => {
        if (grades.find(grade => grade.subject === name)) {
          return (
            <div
              className="flex flex-row justify-start items-start  border-[#C8C8C8] border-[1px] rounded-lg w-auto mx-3 my-2 mt-4 "
              key={nameId}
            >
              <div className="flex flex-row justify-start items-center pr-3 pl-4 border-[#C8C8C8] border-r-[1px] py-1.5 h-full">
                <p className="font-semibold text-base lg:text-xl">{name} </p>
              </div>
              <div className="flex justify-center items-start flex-wrap lg:py-0 pb-1">
                <GradesItems grades={grades} subject={name} />
              </div>
            </div>
          );
        }
      })}
    </>
  );
};

interface GradesItemsProps {
  grades: GradesObjectProps[];
  subject: string;
}

const GradesItems = ({ grades, subject }: GradesItemsProps) => {
  return (
    <>
      {grades.map((grade, gradeId) => (
        <div key={gradeId}>
          {subject === grade.subject ? (
            <div
              className={`flex justify-center items-center mx-1 ${
                grade.type === 'Sprawdzian'
                  ? 'bg-[#ED2C2C47] text-[#DB0909] rounded-md px-1 lg:ml-3 lg:mt-2 w-6 mt-1.5'
                  : ''
              } ${
                grade.type === 'Kartkówka'
                  ? 'bg-[#D1871847] text-[#D18718] rounded-md px-1 lg:mt-2 lg:ml-3 w-6 mt-1.5'
                  : ''
              } ${
                grade.type === 'Zadanie domowe'
                  ? 'bg-[#8540A647] text-[#8540A6] rounded-md px-1 lg:mt-2 lg:ml-3 w-6 mt-1.5'
                  : ''
              } ${
                grade.type === 'Inne'
                  ? 'bg-[#3398734D] text-[#339873] rounded-md px-1 lg:mt-2 lg:ml-3 w-6 mt-1.5'
                  : ''
              } `}
            >
              <p>{grades[gradeId].grade}</p>
            </div>
          ) : (
            <></>
          )}
        </div>
      ))}
    </>
  );
};
