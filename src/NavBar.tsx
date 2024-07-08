import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
      <nav className="w-full h-[10%] bg-black text-white flex justify-center items-center">
        <ul className="flex flex-row gap-3">
          <li>
            <NavLink to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">
              contact a client
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              Dashboard
            </NavLink>
          </li>
        </ul>
      </nav>
  );
};

export default NavBar;
