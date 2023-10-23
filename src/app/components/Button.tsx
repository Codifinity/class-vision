import React from "react";

interface ButtonProps {
  colorful: boolean;
  text: string;
  optionalStyle?: string;
}

export default function Button({
  colorful,
  text,
  optionalStyle,
}: ButtonProps) {
  return (
    <>
      {colorful ? (
        <button
          className={`bg-gradient-to-t from-blue to-light-blue hover:from-dark-blue hover:to-blue hover:text-gray-200 active:scale-90 border-[1px] border-gray-300 transition delay-100 duration-300 ease-in-out font-raleway-semibold text-[20px] text-white px-5 py-2 ${optionalStyle} rounded-md`}
        >
          {text}
        </button>
      ) : (
        <button
          className={`hover:text-gray-950 active:scale-90 border-[1px] border-[#2D2D2D] hover:border-gray-950 transition delay-100 duration-300 ease-in-out font-raleway-semibold text-[20px] text-[#2D2D2D] px-5 py-2 ${optionalStyle} rounded-md`}
        >
          {text}
        </button>
      )}
    </>
  );
}
