import React from "react";
import ZuriLogo from "../assets/zuri.svg";
import I4gLogo from "../assets/I4G.svg";

const Footer = () => {
  return (
    <div className="md:flex hidden items-center justify-between mt-14 border-t-2 border-solid pt-4">
      <img src={ZuriLogo} alt="" />
      <p className="text-gray-500">HNG Internship 9 Frontend Task</p>
      <img src={I4gLogo} alt="" />
    </div>
  );
};

export default Footer;
