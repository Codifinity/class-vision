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
  'Fizyka',
  'Chemia',
  'Język angielski',
  'Biologia',
  'Język niemiecki'
];
let grades: GradesObjectProps[] = [
  { subjectName: 'Matematyka', type: 'Sprawdzian', grade: '3' },
  { subjectName: 'Język polski', type: 'Kartkówka', grade: '1' },
  { subjectName: 'Historia', type: 'Inne', grade: '2' },
  { subjectName: 'Geografia', type: 'Sprawdzian', grade: '5' },
  { subjectName: 'Język angielski', type: 'Zadanie domowe', grade: '5' },
  { subjectName: 'Język angielski', type: 'Inne', grade: '2' },
  { subjectName: 'Chemia', type: 'Sprawdzian', grade: '5' },
  { subjectName: 'Język niemiecki', type: 'Zadanie domowe', grade: '5' },
  { subjectName: 'Język niemiecki', type: 'Zadanie domowe', grade: '5' },
  { subjectName: 'Język niemiecki', type: 'Zadanie domowe', grade: '5' },
  { subjectName: 'Język niemiecki', type: 'Zadanie domowe', grade: '5' },
  { subjectName: 'Język niemiecki', type: 'Zadanie domowe', grade: '5' },
  { subjectName: 'Język niemiecki', type: 'Zadanie domowe', grade: '5' },
  { subjectName: 'Język niemiecki', type: 'Zadanie domowe', grade: '5' },
  { subjectName: 'Biologia', type: 'Inne', grade: '2' },
  { subjectName: 'Fizyka', type: 'Sprawdzian', grade: '5' },
  { subjectName: 'Język niemiecki', type: 'Zadanie domowe', grade: '5' }
];

export default function Page() {
  return (
    <div className="w-full">
      <Navbar />
      <section className="border-[#B4B4B4] border-[1px] rounded-lg lg:w-auto lg:mx-5 my-3 w-auto mx-2 min-h-[30rem] shadow-md">
        <div className="w-full flex md:flex-row flex-col justify-between items-center">
          <h3 className="font-semibold text-4xl pt-7 px-8">Oceny</h3>
          <div className="md:mx-5 mx-0 md:pt-0 pt-3">
            <Dropdown />
          </div>
        </div>
        <div className='px-4 pt-5 pb-10'>
          <Grades names={subjects} />
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
          <div className="flex flex-row justify-start items-center pr-3 pl-4 border-[#C8C8C8] border-r-[1px] py-1.5 h-full">
            <p className="font-semibold text-base lg:text-xl">{name} </p>
          </div>
          <div className='flex justify-center items-start flex-wrap lg:py-0 pb-1'>
            <GradesItems grades={grades} subject={name} />
          </div>
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
