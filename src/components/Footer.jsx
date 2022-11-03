import React from "react";
import ZuriLogo from "../assets/zuri.svg";
import I4gLogo from "../assets/I4G.svg";

const Footer = () => {
  return (
    <div className="flex flex-col items-start md:items-center justify-between space-y-4 md:flex-row mt-14 border-t-2 border-solid p-4">
      <img src={ZuriLogo} alt="" />
      <p className="text-gray-500">HNG Internship 9 Frontend Task</p>
      <img src={I4gLogo} alt="" />
    </div>
  );
};

export default Footer;
