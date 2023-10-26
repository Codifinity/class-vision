"use client";

import { useState, useEffect} from 'react';
import { useRouter } from 'next/navigation';
import Button from "../components/Button"

import { signInWithEmailAndPassword} from "firebase/auth";
import { auth } from '../firebase'

// test account email@example.com haslo123

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { push } = useRouter()

    useEffect(()=> {
        if(localStorage.getItem("authUser"))
        {            
            push('/dashboard');
        }    
    }, [])
    
    const logInForm = (e:any) => {         
        const email_s:string    = email;
        const password_s:string = password;
        
        signInWithEmailAndPassword(auth, email_s, password_s).then().catch((error) => {
            console.log(error.code);
            console.log(error.message);
        })

        auth.onAuthStateChanged((authUser) => {                           
            if(authUser)
            {
                localStorage.setItem("authUser", JSON.stringify(authUser));
                push("/dashboard");
            }
            else
            {
                localStorage.removeItem("authUser");                
            }
        })
        
        e.preventDefault();
    }

    return (
        <form className="max-w-2xl w-full flex flex-col gap-6 px-10" method="post" onSubmit={logInForm}>
            <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-3 rounded-full outline-none border-2 shadow-lg shadow-transparent  focus:shadow-dark-blue/20 focus:border-light-blue" placeholder="E-Mail"/>
            <input type="password" name="haslo" id="password" value={password} onChange={(e) => setPassword(e.target.value)}  className="w-full px-4 py-3 rounded-full outline-none border-2 shadow-lg shadow-transparent  focus:shadow-dark-blue/20 focus:border-light-blue" placeholder="Hasło"/>
            <Button text="Zaloguj się" colorful type="submit" optionalStyle="rounded-full"/>
        </form>
    )
}
