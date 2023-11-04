'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Button from '../components/Button';

import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

// test account email@example.com haslo123

export default function LoginForm() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState('');

  const { push } = useRouter();
  
  useEffect(() => {
    auth.onAuthStateChanged((authUser:any) => {
      if (authUser) {        
        push('/dashboard');
      } else {        
      }
    });
  }, [push]);

  const logInForm = (e: any) => {
    e.preventDefault();
    const email_s: string = email;
    console.log('email_s: ' + email_s);
    const password_s: string = password;

    signInWithEmailAndPassword(auth, email_s, password_s)
      .then()
      .catch(error => {
        console.log(error.code);
        console.log(error.message);
      });
  };

  return (
    <form
      className="max-w-2xl w-full flex flex-col gap-6 px-10"
      method="post"
      onSubmit={logInForm}
    >
      <input
        onKeyDown={e => e.key === 'Enter' && LoginForm}
        type="email"
        name="email"
        id="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        className="w-full px-4 py-3 rounded-full outline-none border-2 shadow-lg shadow-transparent  focus:shadow-dark-blue/20 focus:border-light-blue"
        placeholder="E-Mail"
      />
      <input
        onKeyDown={e => e.key === 'Enter' && LoginForm}
        type="password"
        name="haslo"
        id="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        className="w-full px-4 py-3 rounded-full outline-none border-2 shadow-lg shadow-transparent  focus:shadow-dark-blue/20 focus:border-light-blue"
        placeholder="Hasło"
      />
      <Button
        text="Zaloguj się"
        colorful
        type="submit"
        optionalStyle="rounded-full"
      />
    </form>
  );
}
