import React from "react";

export default function WelcomeSection() {
  return (
    <section className="lg:ml-10 border-[1px] lg:w-4/6 2xl:w-[70rem] p-3 py-7 lg:px-16 px-8 border-gray-300 font-raleway-medium shadow-md md:w-full w-full rounded-lg">
      <h1 className="font-raleway-bold lg:text-6xl my-3 text-2xl md:text-4xl">
        <span className="text-blue">Witaj</span>, Krzysztof
      </h1>
      <div className="lg:text-base font-raleway-semibold text-sm md:text-xl py-2 flex 2xl:flex-row justify-start 2xl:items-center flex-col">
        <div className="flex flex-row gap-2">
          Aktualna lekcja:{" "}
          <span className="text-[#339873] font-raleway-semibold mr-5">
            Matematyka
          </span>
        </div>
        <div className="flex flex-row justify-start lg:items-center items-start lg:gap-2 gap-1 my-2">
          Do końca zostało jeszcze:
          <div>
            <span className="text-[#B02828] font-raleway-semibold mr-5">
              {" "}
              5 min
            </span>
          </div>
        </div>
        <div>
          Następna lekcja:
          <span className="text-dark-blue font-raleway-semibold"> Polski</span>
        </div>
      </div>
    </section>
  );
}
