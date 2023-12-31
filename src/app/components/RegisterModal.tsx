'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

import Button from './Button';

import { getAuth, updatePassword } from 'firebase/auth';
import { auth, db } from '../firebase';
import { doc, updateDoc, getDoc } from 'firebase/firestore';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const RegisterModal = () => {
  const [newPassword1, setNewPassword1] = useState('');
  const [newPassword2, setNewPassword2] = useState('');
  const [wasPasswordChanged, setPasswordChanged] = useState(true);

  const [isError, setIsError] = React.useState<boolean>(false);
  const [errorMessage, setErrorMessage] = React.useState<string>('');

  async function checkUser(role: string) {
    const user = auth.currentUser;
    if (user) {
      const uid: any = user?.uid;
      const docRef = doc(db, 'Users', 'commonUsers', role, uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        let data = docSnap.data();
        const wasPasswordChanged_in = data['hasPasswordChanged'];

        if (!wasPasswordChanged_in) {
          setPasswordChanged(wasPasswordChanged_in);
        }
      }
    }
  }

  const resetPassword = async (e: any) => {
    const user: any = auth.currentUser;

    const password1: string = newPassword1;
    const password2: string = newPassword2;

    if (password1 == password2) {
      updatePassword(user, password1)
        .then(() => {
          const uid: any = auth.currentUser?.uid;
          updateDoc(doc(db, 'Users', 'commonUsers', 'Students', uid), {
            hasPasswordChanged: true
          })
            .then(() => setPasswordChanged(true))
            .catch(err => {
              console.log(err.code);
              console.log(err.message);
            });
        })
        .catch(e => {
          console.log(e.code);
          console.log(e.message);
        });
    } else {
      setIsError(true);
      setErrorMessage('Hasła się nie zgadzają');
      console.log("passwords don't match");
    }

    e.preventDefault();
  };

  React.useEffect(() => {
    setTimeout(async () => {
      checkUser('Students').catch(er => {
        console.log(er.code + '\n' + er.message);
      });
    }, 500);
  }, []);

  return (
    <>
      {!wasPasswordChanged && (
        <div className="absolute inset-x-0 inset-y-0 bg-black/20 backdrop-blur-md w-full h-screen flex items-center justify-center">
          <div className="max-w-4xl w-full bg-white shadow-xl p-8 m-2 rounded-md">
            <form onSubmit={resetPassword}>
              <div className="text-center flex flex-col items-center justify-center gap-4 w-full md:w-3/5 mx-auto">
                <h2 className="text-2xl md:text-3xl font-raleway-bold">
                  Wprowadź nowe hasło
                </h2>
                <p className="text-md md:text-lg font-raleway-regular">
                  Ze względów bezpieczeństwa stwórz nowe hasło za pomocą,
                  którego będziesz się od teraz logować
                </p>
              </div>
              {/* Error box */}
              {isError && (
                <div className="w-full bg-red-200 flex gap-4 items-center p-4 rounded-md">
                  <AiOutlineCloseCircle className="text-4xl" />
                  <p className="font-medium">{errorMessage}</p>
                </div>
              )}
              <div className=" w-full flex flex-col py-8 gap-4">
                <input
                  type="password"
                  name="pass1"
                  id="pass1"
                  value={newPassword1}
                  onKeyDown={e => e.key === 'Enter' && resetPassword}
                  onChange={e => setNewPassword1(e.target.value)}
                  className={`w-full px-4 py-3 rounded-full outline-none border-2 shadow-lg shadow-transparent ${
                    isError && 'border-red-500'
                  }  focus:shadow-dark-blue/20 focus:border-light-blue`}
                  placeholder="Nowe Hasło"
                />
                <input
                  type="password"
                  name="pass2"
                  id="pass2"
                  value={newPassword2}
                  onKeyDown={e => e.key === 'Enter' && resetPassword}
                  onChange={e => setNewPassword2(e.target.value)}
                  className={`w-full px-4 py-3 rounded-full outline-none border-2 shadow-lg shadow-transparent ${
                    isError && 'border-red-500'
                  }  focus:shadow-dark-blue/20 focus:border-light-blue`}
                  placeholder="Powtórz Hasło"
                />
                <Button
                  text="Akceptuj"
                  colorful
                  type="submit"
                  optionalStyle="rounded-full"
                />
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default RegisterModal;
