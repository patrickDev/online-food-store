import React from "react";
import {  Menu, Search, User } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center w-full mb-7">
      {/*LEFT SIDE */}
      <div className="flex justify-between items-center gap-5">
        <button className="px-3 py-3 bg-gray-100 rounded-full hover:bg-green-100">
          <Menu className="w-5 h-5" />
        </button>
        <div className="relative">
          <input
            type="search"
            placeholder="Start type to search ..."
            className="pl-2 pr-4 py-2 w-50 md:w-80 border-2 border-gray-300 bg-white rounded-lg focus:outline-none focus:border-green-500"
          />
          <div className="absolute inset-y-0 right-1 pr-2 flex items-center pointer-events-none">
            <Search className="text-gray-500" size={20} />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <nav className="pl-4">
            <ul className="flex gap-6 text-gray-700">
              <li className="group relative">
                <button className="hover:text-black">Shop</button>
                <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md py-2 w-40">
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Chips
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Tortillas
                  </a>
                </div>
              </li>
              <li>
                <a href="#" className="hover:text-">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Recipes
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      {/* RIGHT SIDE*/}
      <div className="flex justify-between items-center gap-5">
        <div className="hidden md:flex justify-between items-center gap-5">
          <button className="px-3 py-3 border-2 bg-gray-100 rounded-full hover:bg-green-100">
            <User className="w-5 h-5" />
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
