import React from "react";
import ProfileImg from "../assets/TTUmejiaku-with-white-border.png";
import { IoArrowRedoOutline } from "react-icons/io5";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

const ProfileSection = () => {
  return (
    <div className="text-center relative">
      <div>
        <div className="absolute -top-4 right-4 rounded-full border-2 border-solid border-gray-200 flex items-center justify-center h-7 w-7">
          <IoArrowRedoOutline className="hidden md:block text-gray-500 cursor-pointer" />
          <HiOutlineDotsHorizontal className="block md:hidden text-gray-500 cursor-pointer" />
        </div>
      </div>
      <div className="w-24 h-24 rounded-full mx-auto">
        <img id="profile__img" src={ProfileImg} alt="TTUmejiaku" />
      </div>
      <h2 id="twitter" className="mt-6 font-bold text-xl text-gray900">
        TTUmejiaku
      </h2>
      <h3 id="slack" className="invisible">
        Temple
      </h3>
    </div>
  );
};

export default ProfileSection;
