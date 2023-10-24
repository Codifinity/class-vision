"use client";
import React from "react";
import useMediaQuery from "@/hooks/useMediaQuery";

export default function Navbar() {
  const isDesktop = useMediaQuery("(min-width: 1280px)");

  return (
    <div className="lg:ml-10 ml-8 border-[1px] lg:w-4/6 my-6 p-3 py-7 px-16 m-2 border-gray-300 font-raleway-medium shadow-md md:w-11/12 w-10/12 rounded-lg">
      <h1 className="font-bold lg:text-4xl my-3 text-2xl md:text-4xl">
        <span className="text-blue">Witaj</span>, Krzysztof
      </h1>
        <div className="lg:text-xl font-raleway-bold text-sm md:text-xl py-2">
          Aktualna lekcja: {" "}
          <span className="text-[#339873] font-raleway-bold mr-5">
            Matematyka
            </span>
        <div/>
        <div  className="flex lg:flex-row flex-col justify-start md:flex-row lg:items-center items-start lg:gap-2 gap-0 md:gap-1 my-2">
          Do końca zostało jeszcze:
          <div><span className="text-[#B02828] font-raleway-bold mr-5"> 5 min</span></div>
        </div>
        <div>
          Następna lekcja:
          <span className="text-dark-blue font-raleway-bold"> Polski</span>
          </div>
        </div>
      </div>
  );
}
