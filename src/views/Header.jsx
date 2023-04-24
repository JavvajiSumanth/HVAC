import React from "react";
import { AiOutlineLogin } from "react-icons/ai";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className=" py-4 px-3 flex items-center">
        <div>Logo</div>
        <div className="ml-auto font-semibold text-xs ">
          Join Our Pro Network
        </div>
        <Link
          to="/login"
          className="ml-4 flex items-center gap-2 border-2 px-4 text-sm  border-[#eee]"
        >
          <AiOutlineLogin size={16} /> Sign In
        </Link>
        <div className="ml-4 flex items-center gap-2 border-2 px-4 text-sm  border-[#eee]">
          <AiOutlineLogin size={16} /> Sign Out
        </div>
      </div>

      <div className=" py-2 px-3 flex items-center bg-[#eef0f1]">
        <div className="ml-2 text-xs font-semibold border-r-2 border-gray-400 pr-2">
          Interior
        </div>
        <div className="ml-2 text-xs font-semibold border-r-2 border-gray-400 pr-2">
          Exterior
        </div>
        <div className="ml-2 text-xs font-semibold border-r-2 border-gray-400 pr-2">
          Lawn & Garden
        </div>
        <div className="ml-2 text-xs font-semibold border-r-2 border-gray-400 pr-2">
          More
        </div>
        <div className="ml-2 text-xs font-semibold border-r-2 ">
          Articles & Advice
        </div>
      </div>
    </>
  );
};

export default Header;
