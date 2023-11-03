'use client';

import React from 'react';

interface TestCardProps {
  testSubject: string;
  testName: string;
  testTeacher: string;
  testDescription: string;
}

const TestCard = ({
  testSubject,
  testName,
  testTeacher,
  testDescription
}: TestCardProps) => {
  const [color, setColor] = React.useState<string>('');
  return (
    <div className="w-full flex flex-col my-2">
      <div className="bg-green-600 py-2">
        <p className="text-white font-bold text-center">
          {testSubject.toUpperCase()}
        </p>
      </div>

      <div className="w-full bg-light-gray p-2">
        <p className="text-2xl text-custom-dark font-semibold">{testName}</p>
        <p>{testTeacher}</p>
      </div>
    </div>
  );
};

export default TestCard;
