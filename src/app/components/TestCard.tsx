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
    <div className="w-full flex flex-col bg-red-200">
      <div className="bg-green-100">
        <p>{testSubject}</p>
      </div>

      <div>
        <p>{testName}</p>
        <p>{testTeacher}</p>
      </div>
    </div>
  );
};

export default TestCard;
