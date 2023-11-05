'use client';
import * as React from 'react';
import Navbar from '../components/Navbar';

interface lessonObject {
  name: string;
  start: string;
  end: string;
}

let monday: lessonObject[] = [
  { name: 'Fizyka', start: '7:40', end: '8:25' },
  { name: 'Język polski', start: '8:30', end: '9:15' },
  { name: 'Język polski', start: '9:20', end: '10:05' },
  { name: 'Matematyka', start: '10:10', end: '10:55' },
  { name: 'Język angielski', start: '11:10', end: '11:55' },
  { name: 'Język angielski', start: '12:10', end: '12:55' }
];

let tuesday: lessonObject[] = [
  { name: 'Wychowanie fizyczne', start: '7:40', end: '8:25' },
  { name: 'Wychowanie fizyczne', start: '8:30', end: '9:15' },
  { name: 'Chemia', start: '9:20', end: '10:05' },
  { name: 'Język polski', start: '10:10', end: '10:55' },
  { name: 'Matematyka', start: '11:10', end: '11:55' }
];

let wednesday: lessonObject[] = [
  { name: 'Matematyka', start: '7:40', end: '8:25' },
  { name: 'Matematyka', start: '8:30', end: '9:15' },
  { name: 'Fizyka', start: '9:20', end: '10:05' },
  { name: 'Biologia', start: '10:10', end: '10:55' },
  { name: 'Geografia', start: '11:10', end: '11:55' },
  { name: 'Chemia', start: '12:10', end: '12:55' }
];

let thursday: lessonObject[] = [
  { name: 'Chemia', start: '8:30', end: '9:15' },
  { name: 'Język angielski', start: '9:20', end: '10:05' },
  { name: 'Język angielski', start: '10:10', end: '10:55' },
  { name: 'Język niemiecki', start: '11:10', end: '11:55' },
  { name: 'Matematyka', start: '12:10', end: '12:55' },
  { name: 'Język polski', start: '13:00', end: '13:45' }
];

let friday: lessonObject[] = [
  { name: 'Język polski', start: '9:20', end: '10:05' },
  { name: 'Matematyka', start: '10:10', end: '10:55' },
  { name: 'Wychowanie fizyczne', start: '11:10', end: '11:55' },
  { name: 'Fizyka', start: '12:10', end: '12:55' },
  { name: 'Biologia', start: '13:00', end: '8:25' }
];

export default function Page() {
  return (
    <div className="w-full">
      <Navbar />
      <section className="border-gray-300 border-[1px] lg:w-auto mx-3 w-auto rounded-lg px-5 lg:my-4 mt-8 py-8 shadow-md ">
        <div className="flex flex-row items-center justify-between my-2 mb-3 mx-3">
          <h3 className="text-black font-semibold text-4xl pb-4 pl-2">
            Plan lekcji
          </h3>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 md:mx-0 gap-x-2 gap-y-8 lg:mx-2">
          <div className="border-gray-300 border-[1px] rounded-lg lg:mt-0 mt-4 py-4 shadow-md lg:mx-3 mx-1">
            <p className="text-xl font-semibold border-b-[1px] border-gray-300 w-full text-center pb-3">
              Poniedziałek
            </p>
            <div className="flex flex-col justify-center items-start mt-2 px-5">
              <TimetableItem lessons={monday} />
            </div>
          </div>
          <div className="border-gray-300 border-[1px] rounded-lg lg:mt-0 mt-4 py-4 shadow-md lg:mx-3 mx-1">
            <p className="text-xl font-semibold border-b-[1px] border-gray-300 w-full text-center pb-3">
              Wtorek
            </p>
            <div className="flex flex-col justify-center items-start mt-2 px-5">
              <TimetableItem lessons={tuesday} />
            </div>
          </div>
          <div className="border-gray-300 border-[1px] rounded-lg lg:mt-0 mt-4 py-4 shadow-md lg:mx-3 mx-1">
            <p className="text-xl font-semibold border-b-[1px] border-gray-300 w-full text-center pb-3">
              Środa
            </p>
            <div className="flex flex-col justify-center items-start mt-2 px-5">
              <TimetableItem lessons={wednesday} />
            </div>
          </div>
          <div className="border-gray-300 border-[1px] rounded-lg lg:mt-0 mt-4 py-4 shadow-md lg:mx-3 mx-1">
            <p className="text-xl font-semibold border-b-[1px] border-gray-300 w-full text-center pb-3">
              Czwartek
            </p>
            <div className="flex flex-col justify-center items-start mt-2 px-5">
              <TimetableItem lessons={thursday} />
            </div>
          </div>
          <div className="border-gray-300 border-[1px] rounded-lg lg:mt-0 mt-4 py-4 shadow-md lg:mx-3 mx-1">
            <p className="text-xl font-semibold border-b-[1px] border-gray-300 w-full text-center pb-3">
              Piątek
            </p>
            <div className="flex flex-col justify-center items-start mt-2 px-5">
              <TimetableItem lessons={friday} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

interface TimetableItemProps {
  lessons: lessonObject[];
}

const TimetableItem = ({ lessons }: TimetableItemProps) => {
  return (
    <>
      {lessons.map((lesson, lessonId) => (
        <div
          className="flex flex-row justify-start items-center gap-2 bg-blue/30 rounded-xl w-full my-1"
          key={lessonId}
        >
          <div className="flex justify-center items-center bg-dark-blue text-white font-regular rounded-s-xl w-10 py-1">
            <p>{lessonId + 1}</p>
          </div>
          <div className="flex justify-start w-8/12 items-center font-medium">
            <p>{lesson.name}</p>
          </div>
          <div className="w-32">
            <p>
              {lesson.start} - {lesson.end}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};
