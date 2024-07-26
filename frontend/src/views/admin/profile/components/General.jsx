import React from "react";
import ProfileImage from "./ProfileImage";
function General() {
  return (
    <>
      <div className="shadow-md p-5 dark:bg-navy-700 rounded-md">
        <div>
          <ProfileImage />
        </div>
        <div className="mt-5">
          <div>Name: Demo</div>
          <div>E-mail: demo@outlook.com</div>
        </div>
      </div>
    </>
  );
}

export default General;
