'use client';
import React, { useState } from 'react';
import Button from './Button';
import useMediaQuery from '@/hooks/useMediaQuery';
import Image from 'next/image';
import Close from '../../assets/close.png';
import Hamburger from '../../assets/hamburger.png';
import { auth } from '../firebase';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Logo from '../../../public/logo.jpg';

export default function Navbar() {
  const isDesktop = useMediaQuery('(min-width: 1280px)');
  const [isOpen, setOpen] = useState(false);
  const { push } = useRouter();

  const signOut = () => {
    auth.signOut();
    push('/');
  };

  const goToVisonChat = () => {
    push('/vision-chat');
  };

  return (
    <>
      {isDesktop ? (
        <nav className=" h-20 z-100 w-full py-4 border-b-[1px] border-gray-300 shadow-sm flex flex-row justify-between items-center bg-white">
          <Link href={'/dashboard'}>
            <div className="pl-10 w-32">
              <Image src={Logo} alt="class vision" />
            </div>
          </Link>
          <div className="flex flex-row justify-center items-center gap-4 font-medium">
            <Link href={'/grades'}>
              <button className="hover:text-dark-blue">Oceny</button>
            </Link>
            <Link href={'/exams/1'}>
              <button className="hover:text-dark-blue">
                Sprawdziany i kartkówki
              </button>
            </Link>
            <Link href={'/lessons'}>
              <button className="hover:text-dark-blue">Plan lekcji</button>
            </Link>
            <Link href={'/attendance'}>
              <button className="hover:text-dark-blue">Frekwencja</button>
            </Link>
          </div>
          <div className="pr-10 flex flex-row justify-center items-center gap-5">
            <Button colorful={true} text={'VisionMarket'} />
            <Button
              colorful={true}
              text={'VisionChat'}
              onClick={goToVisonChat}
            />
            <Button
              colorful={false}
              onClick={signOut}
              text={'Wyloguj'}
              optionalStyle="bg-white"
            />
          </div>
        </nav>
      ) : (
        <nav className="sticky top-0 z-[100] w-full">
          <div className="flex flex-row justify-between items-center py-4 bg-white border-b-[1px] border-gray-300 shadow-sm">
            <Link href={'/dashboard'}>
              <div className="pl-5 w-20">
                <Image src={Logo} alt="class vision" />
              </div>
            </Link>
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
                ? 'flex flex-col justify-start items-center absolute bg-[#e1e1e1]/60 backdrop-blur-md h-screen w-full z-[100] pt-5 gap-8'
                : 'hidden'
            }`}
          >
            <div className="flex flex-col justify-center items-center gap-4 font-medium">
              <Link href={'/grades'}>
                <button className="hover:text-dark-blue">Oceny</button>
              </Link>
              <Link href={'/exams/1'}>
                <button className="hover:text-dark-blue">
                  Sprawdziany i kartkówki
                </button>
              </Link>
              <Link href={'/lessons'}>
                <button className="hover:text-dark-blue">Plan lekcji</button>
              </Link>
              <Link href={'/attendance'}>
                <button className="hover:text-dark-blue">Frekwrencja</button>
              </Link>
            </div>
            <Button colorful={true} text={'VisionMarket'} />
            <Button
              colorful={true}
              text={'VisionChat'}
              onClick={goToVisonChat}
            />
            <Button
              colorful={false}
              onClick={signOut}
              text={'Wyloguj'}
              optionalStyle="bg-white"
            />
          </div>
        </nav>
      )}
    </>
  );
}
