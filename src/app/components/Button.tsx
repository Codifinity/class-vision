import React from 'react';

import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  colorful: boolean;
  text: string;
  optionalStyle?: string;
  onClick_i?: any;
}

export default function Button({
  colorful,
  text,
  optionalStyle,
  onClick_i,
  ...props //zeby dzialal onClick i submit formularza
}: ButtonProps) {
  return (
    <>
      {colorful ? (
        <button
          className={cn(
            'bg-gradient-to-t from-blue to-light-blue hover:from-dark-blue hover:to-blue hover:text-gray-200 active:scale-90 border-[1px] border-gray-300 transition delay-100 duration-300 ease-in-out font-semibold text-white px-5 py-1 rounded-lg',
            optionalStyle
          )}
          {...props}
        >
          {text}
        </button>
      ) : (
        <button
          className={cn(
            'hover:text-gray-950 active:scale-90 border-[1px] border-[#2D2D2D] hover:border-gray-950 transition delay-100 duration-300 ease-in-out font-semibold text-[#2D2D2D] px-5 py-1 rounded-lg',
            optionalStyle
          )}
          {...props}
        >
          {text}
        </button>
      )}
    </>
  );
}
