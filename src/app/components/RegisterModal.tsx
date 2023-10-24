import ReactDOM from 'react-dom';
import Button from './Button';

const RegisterModal = () => {

    return (
        <div className="absolute inset-x-0 inset-y-0 bg-black/20 w-full h-screen flex items-center justify-center">
            <div className="max-w-4xl w-full bg-white shadow-xl p-8 m-2 rounded-md">
                <form action="">
                    <div className='text-center flex flex-col items-center justify-center gap-4 w-full md:w-3/5 mx-auto'>
                        <h2 className="text-2xl md:text-3xl font-bold">Wprowadź nowe hasło</h2>
                        <p className='text-md md:text-lg'>Ze względów bezpieczeństwa stwórz nowe hasło za pomocą, którego będziesz się od teraz logować</p>
                    </div>
                    <div className=' w-full flex flex-col py-8 gap-4'>
                        <input type="password" name="pass1" id="pass1" className="w-full px-4 py-3 rounded-full outline-none border-2 shadow-lg shadow-transparent  focus:shadow-dark-blue/20 focus:border-light-blue" placeholder="Nowe Hasło"/>
                        <input type="password" name="pass2" id="pass2" className="w-full px-4 py-3 rounded-full outline-none border-2 shadow-lg shadow-transparent  focus:shadow-dark-blue/20 focus:border-light-blue" placeholder="Powtórz Hasło"/>
                        <Button text="Akceptuj" colorful type="submit" optionalStyle="rounded-full"/>
                    </div>
                </form>
            </div>
        </div>
    );

   
};

export default RegisterModal;