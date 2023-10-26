"use client";
import React, { useState } from "react";
import Button from "./Button";
import useMediaQuery from "@/hooks/useMediaQuery";
import Image from "next/image";
import Close from "../../assets/close.png";
import Hamburger from "../../assets/hamburger.png";
import { auth } from "../firebase"
import { useRouter } from 'next/navigation';


export default function Navbar() {
  const isDesktop = useMediaQuery("(min-width: 1280px)");
  const [isOpen, setOpen] = useState(false);
  const { push } = useRouter()

  const signOut = () => {
    localStorage.removeItem("authUser");
    auth.signOut();
    push("/");
  }

  return (
    <>
      {isDesktop ? (
        <nav className="w-full py-4 border-b-[1px] border-gray-300 shadow-sm flex flex-row justify-between items-center">
          <div className="pl-10">asd</div>
          <div className="pr-10 flex flex-row justify-center items-center gap-5">
            <Button colorful={true} text={"VisionMarket"} />
            <Button colorful={true} text={"VisionChat"} />
            <Button colorful={false} onClick={signOut} text={"Wyloguj"} optionalStyle="bg-white"/>
          </div>
        </nav>
      ) : (
        <nav className="sticky top-0 w-full">
          <div className="flex flex-row justify-between items-center py-4 bg-white border-b-[1px] border-gray-300 shadow-sm">
            <div className="pl-5">asd</div>
            <div className="pr-4 " onClick={() => setOpen(!isOpen)}>
              {isOpen ? (
                <Image className="w-8" src={Close} alt="" />
              ) : (
                <Image className="w-8" src={Hamburger} alt="" />
              )}
            </div>
          </div>
          <div
            className={`${
              isOpen
                ? "flex flex-col justify-start items-center absolute bg-[#e1e1e1]/20 backdrop-blur-md h-screen w-full pt-5 gap-8"
                : "hidden"
            }`}
          >
            <Button colorful={true} text={"VisionMarket"} />
            <Button colorful={true} text={"VisionChat"} />
            <Button colorful={true}  onClick={signOut} text={"Wyloguj"} optionalStyle="bg-white"/>
          </div>
        </nav>
      )}
    </>
  );
}
