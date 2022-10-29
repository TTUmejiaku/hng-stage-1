import React from "react";

const Link = ({ url, id, name, subText }) => {
  return (
    <div className="w-full bg-gray-300 text-center p-5 rounded-lg flex flex-col space-y-2">
      <a href={url} id={id} className="">
        {name}
      </a>
      {/* <small>{subText}</small> */}
    </div>
  );
};

export default Link;
