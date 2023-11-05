'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import Button from '../components/Button';

import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

import { AiOutlineCloseCircle } from 'react-icons/ai';

// test account email@example.com haslo123

export default function LoginForm() {
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState('');

  // Error handling
  const [isError, setIsError] = React.useState<boolean>(false);
  const [errorType, setErrorType] = React.useState<string>('');
  const [errorMessage, setErrorMessage] = React.useState<string>('');

  const { push } = useRouter();

  React.useEffect(() => {
    auth.onAuthStateChanged((authUser: any) => {
      if (authUser) {
        push('/dashboard');
      } else {
      }
    });
  }, [push]);

  const logInForm = (e: any) => {
    e.preventDefault();
    const email_s: string = email;
    const password_s: string = password;

    signInWithEmailAndPassword(auth, email_s, password_s)
      .then()
      .catch(error => {
        setIsError(true);
        console.log(error.code);
        console.log(error.message);
        if (error.code === 'auth/invalid-email') {
          setErrorMessage('Nieprawidłowy adres e-mail!');
          setErrorType('email');
        } else if (error.code === 'auth/missing-password') {
          setErrorMessage('Hasło nie może być puste!');
          setErrorType('password');
        } else if (error.code === 'auth/invalid-login-credentials') {
          setErrorMessage('Nieprawidłowe dane logowania!');
          setErrorType('credentials');
        }
      });
    setIsError(false);
  };

  return (
    <form
      className="max-w-2xl w-full flex flex-col gap-6 px-10"
      method="post"
      onSubmit={logInForm}
    >
      {/* Error box */}
      {isError && (
        <div className="w-full bg-red-200 flex gap-4 items-center p-4 rounded-md">
          <AiOutlineCloseCircle className="text-4xl" />
          <p className="font-medium">{errorMessage}</p>
        </div>
      )}
      <input
        onKeyDown={e => e.key === 'Enter' && LoginForm}
        type="email"
        name="email"
        id="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        className={`w-full px-4 py-3 rounded-full outline-none ${
          isError === true &&
          (errorType === 'email' || errorType === 'credentials') &&
          'border-red-500'
        } border-2 shadow-lg shadow-transparent  focus:shadow-dark-blue/20 focus:border-light-blue`}
        placeholder="E-Mail"
      />
      <input
        onKeyDown={e => e.key === 'Enter' && LoginForm}
        type="password"
        name="haslo"
        id="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        className={`w-full px-4 py-3 rounded-full outline-none border-2 shadow-lg shadow-transparent ${
          isError === true &&
          (errorType === 'password' || errorType === 'credentials') &&
          'border-red-500'
        }  focus:shadow-dark-blue/20 focus:border-light-blue`}
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
