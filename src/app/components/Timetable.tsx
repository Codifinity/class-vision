import React, { useState } from 'react';
import Image from 'next/image';
import Arrow from '../../assets/down-arrow.png';
import Link from 'next/link';

interface lessonObject {
  name: string;
  start: string;
  end: string;
}

let today: lessonObject[] = [
  { name: 'Fizyka', start: '7:40', end: '8:25' },
  { name: 'Język polski', start: '8:30', end: '9:15' },
  { name: 'Język polski', start: '9:20', end: '10:05' },
  { name: 'Matematyka', start: '10:10', end: '10:55' },
  { name: 'Język angielski', start: '11:10', end: '11:55' },
  { name: 'Język angielski', start: '12:10', end: '12:55' }
];

let tomorrow: lessonObject[] = [
  { name: 'Wychowanie fizyczne', start: '7:40', end: '8:25' },
  { name: 'Wychowanie fizyczne', start: '8:30', end: '9:15' },
  { name: 'Chemia', start: '9:20', end: '10:05' },
  { name: 'Język polski', start: '10:10', end: '10:55' },
  { name: 'Matematyka', start: '11:10', end: '11:55' }
];

export default function Timetable() {
  return (
    <section className="border-gray-300 border-[1px] rounded-lg bg-white px-5 lg:mt-0 py-8 shadow-md  w-full">
      <div className="flex flex-row items-center justify-between">
        <h3 className="text-dark-blue font-bold text-2xl">Plan lekcji</h3>
      </div>

      <div className="mt-5">
        <p className="text-lg font-semibold">Dzisiaj: </p>
        <div className="flex flex-col justify-center items-start mt-2">
          <TimetableItem lessons={today} />
        </div>
      </div>
      <div className="mt-5">
        <p className="text-lg font-semibold">Jutro: </p>
        <div className="flex flex-col justify-center items-start mt-2">
          <TimetableItem lessons={tomorrow} />
        </div>
      </div>
      <div className="w-full lg:mt-8 lg:mb-3 font-semibold text-xl text-[#00BBE4] lg:mx-5 mx-5 mt-8 mb-5">
        <Link href="/lessons">Zobacz pełny plan lekcji</Link>
      </div>
    </section>
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
