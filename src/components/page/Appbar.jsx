

import React, { useState } from "react";
import { TfiMenu } from "react-icons/tfi";
import SearchBar from "./searchbar";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiVideoPlus } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { IoMic } from "react-icons/io5";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'



function Appbar() {
  const [isMenuOpen,setisMenuOpen] = useState(false)

  React.useEffect(() => {
    if (isMenuOpen) {
      document.body, style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "";


    };

  }, [isMenuOpen]);

  return (
    <div className="flex sticky  top-0  left-0 right-0  z-50 items-center justify-around px-4 py-2 bg-white ">

      <div className="flex items-center space-x-4">
        <TfiMenu className="text-xl cursor-pointer hover:bg-gray-200  duration-200" />
        <img src="YouTube_Premium_logo.svg.png" alt="youtube_logo" className="h-6" />
      </div>


      <div className="flex-grow flex justify-center mx-auto">

        <div className="flex w-[35%] item-center ">

          <div className="w-[100%] px-3 py-2 border rounded-l-full">
            <input type="text" placeholder="Search" className="outline-none" />
          </div>
          <button className="px-4 py-2 border bg-gray-100 rounded-r-full">
            <CiSearch size={"24px"} />
          </button>
          <IoMic size={"42px"}
            className="ml-3 border rounded-full p-2 cursor-pointer hover:bg-gray-200  duration-200" />
        </div>
      </div>


      <div className="flex items-center space-x-4 ">
        <span>
          <BiVideoPlus className="size-7 hover:bg-gray-200 rounded-full m-2" />
        </span>
        <span className="pl-3">
          <IoMdNotificationsOutline className="size-7 hover:bg-gray-200 " />
        </span>
        <div className="flex text-lg cursor-pointer">

        </div>



        <Menu as="div" className="relative ml-3">
          <div>
            <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
            >

              <span className="absolute -inset-1.5" />
              <span className="sr-only">Open user menu</span>
              <img
                className="size-8 rounded-full"
                src="profile_photo.jpg" alt="user_profile_photo" />

            </MenuButton>
          </div>
          <MenuItems
          onClick={()=> setisMenuOpen(false)}
            transition
            className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg transition-transform transform scale-95 opacity-0 focus:scale-100 focus:opacity-100"

          >
            <MenuItem>
              <a
                // href="#"
                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
              >
                Your Profile
              </a>
            </MenuItem>
            <MenuItem>
              <a
                // href="#"
                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
              >
                Settings
              </a>
            </MenuItem>
            <MenuItem>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
              >
                Sign out
              </a>
            </MenuItem>
          </MenuItems>
        </Menu>


      </div>
    </div>
  );
}

export default Appbar;
