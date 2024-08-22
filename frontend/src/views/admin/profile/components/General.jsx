import React from "react";
import ProfileImage from "./ProfileImage";
function General() {
let name= localStorage.getItem("fullname");
let email = localStorage.getItem("email");

function capitalizeFLetter(){
  name = name[0].toUpperCase() + name.slice(1);
}
capitalizeFLetter();

  return (
    <>
      <div className="shadow-md p-5 dark:bg-navy-700 rounded-md">
        <div>
          <ProfileImage />
        </div>
        <div className="mt-5">
          <ul>
          <li>Name: <span className="ms-3">{name}</span> </li>
          <li>Email: <span className="ms-4">{email}</span> </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default General;
