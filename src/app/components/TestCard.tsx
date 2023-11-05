'use client';

import React from 'react';

interface TestCardProps {
  testSubject: string;
  testName: string;
  testTeacher: string;
  testDescription: string;
  testType: string;
}

const TestCard = ({
  testSubject,
  testName,
  testTeacher,
  testDescription,
  testType
}: TestCardProps) => {
  const backgroundColor =
    testType === 'kartkówka' ? 'bg-[#D18718]' :
    testType === 'sprawdzian' ? 'bg-[#DB0909]' :
    testType === 'odpowiedź' ? 'bg-[#339873]' : '';

  return (
    <div className={`w-full flex flex-col my-2 ${backgroundColor}`}>
      <div className="py-2">
        <p className="text-white font-bold text-center">
          {testSubject.toUpperCase()} - {testType.toUpperCase()}
        </p>
      </div>

      <div className="w-full bg-light-gray p-2">
        <p className="text-2xl text-custom-dark font-semibold">
          {testName} - {testDescription}
        </p>
        <p>{testTeacher}</p>
      </div>
    </div>
  );
};



export default TestCard;
