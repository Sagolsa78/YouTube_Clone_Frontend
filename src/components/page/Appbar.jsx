import React from "react";
import { TfiMenu } from "react-icons/tfi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiVideoPlus } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { IoMic } from "react-icons/io5";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

function Appbar({ isSidebarOpen, toggleSidebar }) {
 

  return (
    <div className="flex sticky  sm:flex-row sm:justify-between sm:gap-0 top-0 left-0 right-0 z-50 items-center justify-around px-4 py-2 bg-white">
      
      <div
        onClick={toggleSidebar} 
        id="sidebar-toggle"
        className="flex items-center space-x-4 cursor-pointer"
      >
        <TfiMenu
          className="text-xl hover:bg-gray-200 duration-200"
          title={isSidebarOpen ? "Close Sidebar" : "Open Sidebar"} 
        />
        <img
          src="YouTube_Premium_logo.svg.png"
          alt="YouTube Logo"
          className="h-6"
        />
      </div>

      {/* Search Bar */}
      <div className="flex-grow flex justify-center mx-auto">
        <div className="flex w-[35%] items-center">
          <div className="w-[100%] px-3 py-2 border rounded-l-full">
            <input
              type="text"
              placeholder="Search"
              className="outline-none w-full"
            />
          </div>
          <button className="px-4 py-2 border bg-gray-100 rounded-r-full">
            <CiSearch size={"24px"} />
          </button>
          <IoMic
            size={"42px"}
            className="ml-3 border rounded-full p-2 cursor-pointer hover:bg-gray-200 duration-200"
          />
        </div>
      </div>

      {/* User Actions */}
      <div className="flex items-center space-x-4">
        <BiVideoPlus className="text-2xl hover:bg-gray-200 rounded-full cursor-pointer" />
        <IoMdNotificationsOutline className="text-2xl hover:bg-gray-200 cursor-pointer" />
        {/* Profile Menu */}
        <Menu as="div" className="relative ml-3">
          <MenuButton className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2">
            <img
              className="w-8 h-8 rounded-full"
              src="profile_photo.jpg"
              alt="User Profile"
            />
          </MenuButton>
          <MenuItems
            className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg"
          >
            <MenuItem>
              {({ active }) => (
                <a
                  href="#"
                  className={`block px-4 py-2 text-sm ${
                    active ? "bg-gray-100" : "text-gray-700"
                  }`}
                >
                  Your Profile
                </a>
              )}
            </MenuItem>
            <MenuItem>
              {({ active }) => (
                <a
                  href="#"
                  className={`block px-4 py-2 text-sm ${
                    active ? "bg-gray-100" : "text-gray-700"
                  }`}
                >
                  Settings
                </a>
              )}
            </MenuItem>
            <MenuItem>
              {({ active }) => (
                <a
                  href="#"
                  className={`block px-4 py-2 text-sm ${
                    active ? "bg-gray-100" : "text-gray-700"
                  }`}
                >
                  Sign out
                </a>
              )}
            </MenuItem>
          </MenuItems>
        </Menu>
      </div>
    </div>
  );
}

export default Appbar;
