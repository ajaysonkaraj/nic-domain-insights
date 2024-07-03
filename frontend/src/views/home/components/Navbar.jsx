import React from "react";
import { FiSearch } from "react-icons/fi";
import { RiMoonFill, RiSunFill } from "react-icons/ri";
import "react-icons/io";
import { Link } from "react-router-dom";
// import avatar from "assets/img/avatars/avatar4.png";
// import avatar from "assets/img/avatars/avatar.png";

const Navbar = (props) => {
  //   const { onOpenSidenav, brandText } = props;
  const [darkmode, setDarkmode] = React.useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
  };

  return (
    <nav className="sticky top-4 z-40 flex flex-row flex-wrap items-center justify-between rounded-xl bg-white/10 p-1 backdrop-blur-xl dark:bg-[#0b14374d]">
      <div className="ml-[6px]">
        <div className="h-6 w-[224px] pt-1">
          <ul className="flex justify-between font-bold text-gray-500 ">
            <li className="cursor-pointer duration-200 ease-in-out hover:scale-105 hover:text-navy-700 ">
              Home
            </li>
            <li className="cursor-pointer duration-200 ease-in-out hover:scale-105 hover:text-navy-700 ">
              About Us
            </li>
            <li className="cursor-pointer duration-200 ease-in-out hover:scale-105 hover:text-navy-700 ">
              News
            </li>
          </ul>
        </div>
      </div>
      {/* Search box  */}
      <div className="relative mt-[3px] flex h-[45px] w-[355px] flex-grow items-center justify-around gap-2 rounded-full bg-white px-2 py-2 shadow-xl shadow-shadow-500 dark:!bg-navy-800 dark:shadow-none md:w-[365px] md:flex-grow-0 md:gap-1 xl:w-[365px] xl:gap-2">
        <div className="flex h-full items-center rounded-full bg-lightPrimary text-navy-700 dark:bg-navy-900 dark:text-white xl:w-[225px]">
          <p className="pl-3 pr-2 text-xl">
            <FiSearch className="h-4 w-4 text-gray-400 dark:text-white" />
          </p>
          <input
            type="text"
            placeholder="Search..."
            className="block h-full w-full rounded-full bg-lightPrimary text-sm font-medium text-navy-700 outline-none placeholder:!text-gray-400 dark:bg-navy-900 dark:text-white dark:placeholder:!text-white sm:w-fit"
          />
        </div>

        <div
          className="cursor-pointer text-gray-600"
          onClick={() => {
            if (darkmode) {
              document.body.classList.remove("dark");
              setDarkmode(false);
            } else {
              document.body.classList.add("dark");
              setDarkmode(true);
            }
          }}
        >
          {darkmode ? (
            <RiSunFill className="h-4 w-4 text-gray-600 dark:text-white" />
          ) : (
            <RiMoonFill className="h-4 w-4 text-gray-600 dark:text-white" />
          )}
        </div>

        {/* Login Logout button  */}
        {localStorage.getItem("token") ? (
          <div className="flex ">
            <div className="px-2 mt-1"> <button><Link to="/admin/default">Admin</Link></button></div>
            <div className=" rounded-full bg-blue-700 py-1 px-3 font-bold text-white duration-200 ease-in-out hover:scale-105 hover:bg-blue-600">
              <Link to="/auth/login">
                <button onClick={handleLogout}>Loguout</button>
              </Link>
            </div>
          </div>
        ) : (
          <div className=" rounded-full bg-blue-700 py-1 px-3 font-bold text-white duration-200 ease-in-out hover:scale-105 hover:bg-blue-600">
            <Link to="/auth/login">
              <button>Login</button>
            </Link>
          </div>
        )}

        {/* Profile & Dropdown */}
      </div>
    </nav>
  );
};

export default Navbar;
