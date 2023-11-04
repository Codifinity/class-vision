import React from 'react';

interface WelcomeSectionProps {
  userName: string;
}

export default function WelcomeSection({ userName }: WelcomeSectionProps) {
  return (
    <section className=" border-[1px] p-3 py-7 lg:px-16 px-8 border-gray-300 font-medium shadow-md md:w-full w-full rounded-lg">
      <h1 className="font-bold lg:text-6xl my-3 text-2xl md:text-4xl">
        <span className="text-blue">Witaj</span>, {userName}
      </h1>
      <div className="lg:text-base font-semibold text-sm md:text-xl py-2 flex 2xl:flex-row justify-start 2xl:items-center flex-col">
        <div className="flex flex-row gap-2">
          Aktualna lekcja:{' '}
          <span className="text-[#339873] font-semibold mr-5">Matematyka</span>
        </div>
        <div className="flex flex-row justify-start lg:items-center items-start lg:gap-2 gap-1 my-2">
          Do końca zostało jeszcze:
          <div>
            <span className="text-[#B02828] font-semibold mr-5"> 5 min</span>
          </div>
        </div>
        <div>
          Następna lekcja:
          <span className="text-dark-blue font-semibold"> Polski</span>
        </div>
      </div>
    </section>
  );
}
