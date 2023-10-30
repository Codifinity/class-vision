'use client';

import * as React from 'react';
import Navbar from '../components/Navbar';
import Dropdown from '../components/Dropdown';

interface GradesObjectProps {
    subjectName: string;
    type: string;
    grade: string;
  }
  
  let subjects = [
    'Matematyka',
    'Język polski',
    'Historia',
    'Geografia',
    'Język angielski'
  ];
  let grades: GradesObjectProps[] = [
    { subjectName: 'Matematyka', type: 'Sprawdzian', grade: '3' },
    { subjectName: 'Język polski', type: 'Kartkówka', grade: '1' },
    { subjectName: 'Historia', type: 'Inne', grade: '2' },
    { subjectName: 'Geografia', type: 'Sprawdzian', grade: '5' },
    { subjectName: 'Język angielski', type: 'Zadanie domowe', grade: '5' },
    { subjectName: 'Język angielski', type: 'Inne', grade: '2' }
  ];


export default function Page() {
  return (
    <div className="w-full">
      <Navbar />
      <section className="border-[#B4B4B4] border-[1px] rounded-lg lg:w-auto lg:mx-5 my-3 w-auto mx-2 min-h-[30rem] shadow-md">
      <div className='w-full flex flex-row justify-between items-center'>
        <div>
          <h3 className="font-bold text-2xl my-5 mx-7">
            Oceny
          </h3>
        </div>
        <div className='mx-5'>
          <Dropdown />
        </div>
      </div>
      <div>
        <Grades names={subjects} />
        <div className="w-full lg:mt-16 lg:mb-5 font-semibold text-xl text-[#00BBE4] lg:mx-10 mx-5 mt-10 mb-5 ">
        </div>
      </div>
    </section>
    </div>
    
  );
}
  
  interface GradesProps {
    names: string[];
  }
  
  const Grades = ({ names }: GradesProps) => {
    return (
      <>
        {names.map((name, nameId) => (
          <div
            className="flex flex-row justify-start items-start  border-[#C8C8C8] border-[1px] rounded-lg w-auto mx-3 my-2 mt-4 "
            key={nameId}
          >
            <div className="flex flex-row justify-start items-center pr-3 pl-4 border-[#C8C8C8] border-r-[1px] py-1.5 my-0 ">
              <p className="font-semibold text-base lg:text-xl">{name} </p>
            </div>
            <GradesItems grades={grades} subject={name} />
          </div>
        ))}
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
            {subject === grade.subjectName ? (
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
  

