import Link from 'next/link';
import React from 'react';

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
  'Język angielski'
];
/*
let grades: GradesObjectProps[] = [
  {id: "", subject: 'Matematyka',      type: 'Sprawdzian',     grade: '3' },
  {id: "", subject: 'Język polski',    type: 'Kartkówka',      grade: '1' },
  {id: "", subject: 'Historia',        type: 'Inne',           grade: '2' },
  {id: "", subject: 'Geografia',       type: 'Sprawdzian',     grade: '5' },
  {id: "", subject: 'Język angielski', type: 'Zadanie domowe', grade: '5' },
  {id: "", subject: 'Język angielski', type: 'Inne',           grade: '2' }
];*/

interface LastGradesProps {
  grades:[{id: string, subject: string, type: string, mark: string}]
}
export default function LastGrades({grades}:LastGradesProps) {
  return (
    <section className="border-gray-300 border-[1px] rounded-lg lg:w-2/3 xl:w-1/2 w-full min-h-[30rem] shadow-md">
      <h3 className="text-dark-blue font-bold text-2xl my-5 mx-7">
        Ostatnie oceny
      </h3>
      <div>
        <Grades names={subjects} grades={grades}/>
        <div className="w-full lg:mt-16 lg:mb-5 font-semibold text-xl text-[#00BBE4] lg:mx-10 mx-5 mt-10 mb-5">
          <Link href="/grades">Zobacz wszystkie oceny</Link>
        </div>
      </div>
    </section>
  );
}

interface GradesProps {
  names: string[],
  grades:[{id: string, subject: string, type: string, mark: string}]
}

const Grades = ({ names, grades }: GradesProps) => {
  return (
    <>
      {names.map((name, nameId) => (
        <div
          className="flex flex-row justify-start items-start border-b-2 border-gray-300 w-11/12 mx-auto pt-2 pb-2 my-2 mt-4 "
          key={nameId}
        >
          <div className="flex flex-row justify-start items-center pr-3 pl-4">
            <p className="font-semibold text-xl">{name}: </p>
          </div>
          <GradesItems grades={grades} subject={name} />
        </div>
      ))}
    </>
  );
};

interface GradesItemsProps {
  grades:[{id: string, subject: string, type: string, mark: string}],
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
                  ? 'bg-[#ED2C2C47] text-[#DB0909] rounded-md px-1 w-6 mt-0.5'
                  : ''
              } ${
                grade.type === 'Kartkówka'
                  ? 'bg-[#D1871847] text-[#D18718] rounded-md px-1 w-6 mt-0.5'
                  : ''
              } ${
                grade.type === 'Zadanie domowe'
                  ? 'bg-[#8540A647] text-[#8540A6] rounded-md px-1 w-6 mt-0.5'
                  : ''
              } ${
                grade.type === 'Inne'
                  ? 'bg-[#3398734D] text-[#339873] rounded-md px-1 w-6 mt-0.5'
                  : ''
              } `}
            >
              <p>{grades[gradeId].mark}</p>
            </div>
          ) : (
            <></>
          )}
        </div>
      ))}
    </>
  );
};
