import Link from 'next/link';
import React from 'react';

interface examsProps {
  subject: string;
  type: string;
  description: string;
  date: string;
}

let exams: examsProps[] = [
  {
    subject: 'matematyka',
    type: 'sprawdzian',
    description: 'Sprawdzian z wielomianów',
    date: '05-03-2023'
  },
  {
    subject: 'jezyk polski',
    type: 'kartkowka',
    description: 'Test wiedzy z roku 1984',
    date: '05-03-2023'
  },
  {
    subject: 'geografia',
    type: 'odpowiedz',
    description: 'Rzeki polski',
    date: '05-03-2023'
  }
];

export default function ExamsSchedule() {
  return (
    <section className=" shadow-md border-gray-300 border-[1px] rounded-lg h-full">
      <h3 className="text-dark-blue font-bold text-2xl my-5 mx-7">
        Sprawdziany, kartkówki
      </h3>
      <div className="w-10/12 mx-auto">
        <Exams exams={exams} />
      </div>
      <div className="w-full lg:mt-16 lg:mb-5 font-semibold text-xl text-[#00BBE4] lg:mx-10 mx-5 mt-10 mb-5">
        <Link href="#">Zobacz wszystkie sprawdziany</Link>
      </div>
    </section>
  );
}

interface ExamProps {
  exams: examsProps[];
}

const Exams = ({ exams }: ExamProps) => {
  return (
    <>
      {exams.map((exam, examId) => (
        <div
          className={`flex flex-col justify-between items-center ${
            exam.type === 'sprawdzian' ? 'bg-[#ED2C2C47]' : ''
          } ${exam.type === 'kartkowka' ? 'bg-[#D1871847]' : ''} ${
            exam.type === 'odpowiedz' ? 'bg-[#3398734D]' : ''
          }  rounded-lg my-4`}
          key={examId}
        >
          <div
            className={`w-full ${
              exam.type === 'sprawdzian' ? 'bg-[#DB0909]' : ''
            } ${exam.type === 'kartkowka' ? 'bg-[#D18718]' : ''} ${
              exam.type === 'odpowiedz' ? 'bg-[#339873]' : ''
            } rounded-t-lg py-1`}
          >
            <h5 className="text-white font-bold flex justify-center items-center uppercase">
              {exam.subject}
            </h5>
          </div>
          <div className="py-1 flex lg:flex-row flex-col-reverse justify-between items-center w-10/12">
            <p className="text-lg">{exam.description}</p>
            <p>{exam.date}</p>
          </div>
        </div>
      ))}
    </>
  );
};
