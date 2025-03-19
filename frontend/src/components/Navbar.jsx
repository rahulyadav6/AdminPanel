import React from "react";
import Themetoggle from "./Themetoggle";
import { CiSquarePlus } from "react-icons/ci";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex flex-col sm:flex-row justify-between px-20 py-4 bg-gray-100 dark:bg-gray-800">
      {/* logo */}
      <Link to={"/"}>
        <div className='text-xl font-bold text-gray-800 dark:text-white cursor-pointer'>PRODUCT STORE</div>
      </Link>

      {/* buttons */}
      <div className="flex justify-center items-center gap-2">
        <Link to={"/create"}>
          <CiSquarePlus 
            className="text-4xl text-gray-600 dark:text-white cursor-pointer p-2 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-500 transition" 
          />
        </Link>
        <Themetoggle />
      </div>
    </nav>
  );
};

export default Navbar;
