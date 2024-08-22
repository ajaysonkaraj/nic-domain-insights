import { Link } from "react-router-dom";
import UserImage from "../../../assets/img/avatars/avatar.png";


const FreeCard = () => {
 let name = localStorage.getItem("fullname");
 let email = localStorage.getItem("email");

 function capitalizeFLetter(){
   name = name[0].toUpperCase() + name.slice(1);
 }
 capitalizeFLetter();
  return (
    <div className="relative mt-24 flex w-[256px] justify-center rounded-[20px] bg-gradient-to-br from-[#868CFF] via-[#432CF3] to-brand-500 pb-4">
      <div className="absolute -top-12 flex h-24 w-24 items-center justify-center rounded-full border-[4px] border-white bg-gradient-to-b from-[#868CFF] to-brand-500 dark:!border-navy-800">
        <div>
          <img
            src={UserImage}
            alt="Profile_Picture"
            className="h-16 w-16 rounded-[50%]"
          />
        </div>
      </div>

      <div className="mt-11 flex h-fit flex-col items-center">
        <p className="text-lg font-bold mt-4 tracking-wide text-white">{name}</p>
        <p className="mt-1 px-4 text-center text-sm text-white tracking-normal">
       {email}
        </p>

        <Link
          to="/home"
          className="text-bold mt-10 block rounded-full bg-gradient-to-b from-white/50 hover:scale-105 duration-200 ease-in-out to-white/10 py-2 px-10 text-center text-base text-white hover:bg-gradient-to-b hover:from-white/40 hover:to-white/5 "
          
        >
          Home
        </Link>
      </div>
    </div>
  );
};

export default FreeCard;
