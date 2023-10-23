import Image from "next/image";

import ClassBgImg from "../../assets/Class-bg2.svg";
import VisionBgImg from "../../assets/Vision-bg2.svg";

const Page = () => {
    return (<div className="w-full flex h-screen">
        <div className="bg-dark-blue flex-1 flex items-center justify-center flex-col p-4">
            <div className="text-white w-full bg-yellow-400 h-full flex items-center">
                <div className="bg-red-100 w-1/2">
                    <h1 className="text-5xl font-medium">Witaj!</h1>
                    <p className="text-lg mt-2">Uzupełnij poniższe pola aby się zalogować. Podaj hasło jakie otrzymałeś/aś od szkoły. Po zalogowaniu się pierwszy raz możesz je zmienić na własne</p>
                </div>
            </div>
            <div className="bg-red-100 w-full">
                <Image src={ClassBgImg} alt="Class text image" width={530} height={230}/>
                <Image src={VisionBgImg} alt="Vision text image" width={650} height={230}/>
            </div>
        </div>
        <div className="flex-1"></div>
    </div>)
}

export default Page;