import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header mb-10">
      <div className="container mx-auto p-2">
        <ul className="flex flex-wrap items-center justify-around text-white m-0 p-0">
          <li className="w-full md:w-auto mb-2 md:mb-0 text-center md:text-left">
            <a href="/" className="hover:text-orange-500">
              Best Sellers
            </a>
          </li>
          <li className="w-full md:w-auto mb-2 md:mb-0 text-center md:text-left">
            <a href="/" className="hover:text-orange-500">
              Gift Ideas
            </a>
          </li>
          <li className="w-full md:w-auto mb-2 md:mb-0 text-center md:text-left">
            <a href="/" className="hover:text-orange-500">
              New Releases
            </a>
          </li>
          <li className="w-full md:w-auto mb-2 md:mb-0 text-center md:text-left">
            <a href="/" className="hover:text-orange-500">
              Today's Deals
            </a>
          </li>
          <li className="w-full md:w-auto mb-2 md:mb-0 text-center md:text-left">
            <a href="/" className="hover:text-orange-500">
              Customer Service
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
