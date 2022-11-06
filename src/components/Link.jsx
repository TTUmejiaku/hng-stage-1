import React from "react";
import { Link } from "react-router-dom";
import Contact from "./Contact";

const ButtonLink = ({ url, id, name, subText }) => {
  return (
    <div className="group bg-gray200 text-center py-5 rounded-lg flex flex-col space-y-4 hover:bg-gray300 relative">
      {id === "contact" ? (
        <Link id={id} to={`/contact`} className="text-gray900 peer">
          {name}
        </Link>
      ) : (
        <a href={url} id={id} className="text-gray900 peer">
          {name}
        </a>
      )}

      {subText && (
        <>
          <div className=" hidden absolute -top-10 left-1/2 -translate-x-1/2 rounded-lg lg:peer-hover:block bg-gray900 py-1 px-4">
            <small className="text-gray200">{subText}</small>
          </div>
          <div className="hidden absolute lg:peer-hover:block -top-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-solid border-transparent border-r-[10px] border-t-[15px] border-t-gray900"></div>
        </>
      )}
    </div>
  );
};

export default ButtonLink;
