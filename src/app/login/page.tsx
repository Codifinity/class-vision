"use client"

import Image from "next/image";

import ClassBgImg from "../../assets/Class-bg2.svg";
import VisionBgImg from "../../assets/Vision-bg2.svg";

import Button from "../components/Button"
import { useState, useEffect } from 'react';

import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase"

// test account kuba.toporek@gmail.com 123456
const Page = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLogged, setLogged] = useState(false);

    const logInForm = async(event: any) => {
        signOut(auth);
        const email_s:string    = email;
        const password_s:string = password;
        

        signInWithEmailAndPassword(auth, email_s, password_s).then((userCred) => {
            console.log("Logged in");
            console.log(userCred);
        }).catch((error) => {
            console.log(error.code);
            console.log(error.message);
        })

        auth.onAuthStateChanged((authUser) => {            
            if(authUser)
            {
                localStorage.setItem("authUser", JSON.stringify(authUser));
                setLogged(true);
            }
            else
            {
                localStorage.removeItem("authUser");
            }        
        })

        /*
        createUserWithEmailAndPassword(auth, email_s, password_s).then((userCred) => {
            const user = userCred.user;
            console.log("Account created");
            console.log(user);

        }).catch((error) => {
            const errorCode     = error.code;
            const errorMessage = error.message;
            console.log("error code: " + errorCode);
            console.log("error code: " + errorMessage);
        })
        */

        event.preventDefault()
    }

    return (
    <>
        {isLogged ? (
                <div>You are logged in</div>
        ) : (
            <div className="w-full flex h-screen flex-col items-center justify-center md:items-stretch  md:flex-row bg-dark-blue md:bg-white">
                <div className="relative md:static md:bg-dark-blue md:flex-1 flex items-center justify-center flex-col p-8 sm:w-full">
                    <div className="text-white w-full h-full flex items-center">
                        <div >
                            <h1 className="text-center md:text-left text-4xl md:text-7xl font-raleway-medium">Witaj!</h1>
                            <p className="w-full text-md text-center font-raleway-regular md:text-left md:text-xl mt-2 md:w-2/3">Uzupełnij poniższe pola aby się zalogować. Podaj hasło jakie otrzymałeś/aś od szkoły. Po zalogowaniu się pierwszy raz możesz je zmienić na własne</p>
                        </div>
                    </div>
                    <div className="w-full hidden md:block">
                        <Image src={ClassBgImg} alt="Class text image" width={530} height={230}/>
                        <Image className="mt-6 fill-red-900 text-red-900" src={VisionBgImg} alt="Vision text image" width={650} height={230}/>
                    </div>
                </div>
                <div className="md:flex-1  flex items-center justify-center ">
                    {/* FORMULARZ LOGOWANIA */}
                    <form className="max-w-2xl w-full flex flex-col gap-6 px-10" method="post" onSubmit={logInForm}>
                        <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-3 rounded-full outline-none border-2 shadow-lg shadow-transparent  focus:shadow-dark-blue/20 focus:border-light-blue" placeholder="E-Mail"/>
                        <input type="password" name="haslo" id="password" value={password} onChange={(e) => setPassword(e.target.value)}  className="w-full px-4 py-3 rounded-full outline-none border-2 shadow-lg shadow-transparent  focus:shadow-dark-blue/20 focus:border-light-blue" placeholder="Hasło"/>
                        <Button text="Zaloguj się" colorful type="submit" optionalStyle="rounded-full"/>
                    </form>
                </div>
            </div>
        )}
    </>
    )
}

export default Page;