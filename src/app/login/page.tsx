import LoginForm from "../components/LoginForm";

import Image from "next/image";

import ClassBgImg from "../../assets/Class-bg2.svg";
import VisionBgImg from "../../assets/Vision-bg2.svg";

const Page = () => {
    return (
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
                <LoginForm/>
            </div>
        </div>
    )
}

export default Page;