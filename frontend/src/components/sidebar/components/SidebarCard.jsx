import UserImage from "../../../assets/img/avatars/avatar.png";
// import UserImage from "../../../assets/img/avatars/avatar4.png";
const FreeCard = () => {
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
        <p className="text-lg font-bold text-white">user@gmail.com</p>
        <p className="mt-1 px-4 text-center text-sm text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
          dolor sit amet consectetur.
        </p>

        <a
          target="blank"
          className="text-medium mt-7 block rounded-full bg-gradient-to-b from-white/50 to-white/10 py-[12px] px-11 text-center text-base text-white hover:bg-gradient-to-b hover:from-white/40 hover:to-white/5 "
          href="https://horizon-ui.com/pro?ref=live-free-tailwind-react"
        >
          Logout
        </a>
      </div>
    </div>
  );
};

export default FreeCard;
