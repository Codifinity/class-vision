import React from "react";
import Button from "./Button";

export default function HeroSection() {
  return (
    <section className="w-full py-20 flex flex-col justify-center items-center">
      <h1 className="font-raleway-semibold lg:text-[96px] text-6xl mt-10 ">
        Class<span className="text-blue">Vision</span>
      </h1>
      <p className="text-[#929292] lg:w-96 w-64 text-sm mt-5 text-center">
        lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
        ipsumlorem ipsumlorem ipsumlorem ipsum
      </p>
      <div className="flex md:flex-row flex-col justify-center items-center gap-5 md:mt-32 mt-24">
        <Button
          colorful={true}
          text={"Zaloguj się"}
          paddingX={"5"}
          paddingY={"2"}
        />
        <Button
          colorful={false}
          text={"Zarejestruj się"}
          paddingX={"5"}
          paddingY={"2"}
        />
      </div>
    </section>
  );
}
