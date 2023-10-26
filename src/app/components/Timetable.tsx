'use client';
import useMediaQuery from '@/hooks/useMediaQuery';
import React, { useState } from 'react';
import Image from 'next/image';
import Arrow from '../../assets/down-arrow.png';

interface lessonObject {
  name: string;
  start: string;
  end: string;
}

let today: lessonObject[] = [
  { name: 'Matematyka', start: '7:40', end: '8:25' },
  { name: 'Język polski', start: '8:30', end: '9:20' },
  { name: 'Matematyka', start: '7:40', end: '8:25' },
  { name: 'Język polski', start: '8:30', end: '9:20' },
  { name: 'Matematyka', start: '7:40', end: '8:25' },
  { name: 'Język polski', start: '8:30', end: '9:20' }
];

let tomorrow: lessonObject[] = [
  { name: 'wf', start: '7:40', end: '8:25' },
  { name: 'Język angielski', start: '8:30', end: '9:20' },
  { name: 'Matematyka', start: '7:40', end: '8:25' },
  { name: 'Fizyka', start: '8:30', end: '9:20' },
  { name: 'Matematyka', start: '7:40', end: '8:25' },
  { name: 'Język polski', start: '8:30', end: '9:20' }
];

export default function Timetable() {
  const isDesktop = useMediaQuery('(min-width: 1280px)');
  const [isOpen, setOpen] = useState(true);

  return (
    <section className="border-gray-300 border-[1px] lg:w-1/4 w-full mx-auto rounded-lg px-5 lg:mt-0 mt-4 py-8 shadow-md">
      <div className="flex flex-row items-center justify-between">
        <h3 className="text-dark-blue font-bold text-2xl">Plan lekcji</h3>
        <div
          className={`w-10 ${isOpen ? 'rotate-180 z-0' : ''}`}
          onClick={() => setOpen(!isOpen)}
        >
          <Image src={Arrow} alt="" />
        </div>
      </div>
      {isOpen ? (
        <>
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
        </>
      ) : (
        <></>
      )}
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
