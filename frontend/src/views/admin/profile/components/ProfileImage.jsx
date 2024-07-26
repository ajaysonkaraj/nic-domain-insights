import React from "react";
import image from "../../../../assets/img/avatars/avatar.png";
function ProfileImage() {
  return (
    <>
      <div >
        <img src={image} alt="Profile_Image"  className="w-40 h-40 drop-shadow-2xl "/>
      </div>
    </>
  );
}

export default ProfileImage;
