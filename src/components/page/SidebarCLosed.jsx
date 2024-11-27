import React from "react";
import { MdHome, MdFileDownload } from "react-icons/md";
import { SiYoutubeshorts, SiYoutubemusic } from "react-icons/si";
import { PiVideoLight } from "react-icons/pi";
import { LiaUserCircle } from "react-icons/lia";

function SidebarClosed() {
  // Define menu items with their corresponding icons and labels
  const menuItems = [
    { Icon: MdHome, label: "Home" },
    { Icon: SiYoutubeshorts, label: "Shorts" },
    { Icon: PiVideoLight, label: "Subscriptions" },
    { Icon: SiYoutubemusic, label: "Youtube Music" },
    { Icon: LiaUserCircle, label: "You" },
    { Icon: MdFileDownload, label: "Downloads" },
  ];

  return (
    <div className="w-16 h-screen sticky top-14 z-10">
      {menuItems.map((item, index) => (
        <div
          key={index}py-4 pr-4
          className="w-20 h-20 p-4 rounded-lg cursor-pointer transition-transform duration-300 ease-in-out transform hover:bg-gray-200"
        >
          <item.Icon className="size-6 " />
          <div className="text-xs">{item.label}</div>
        </div>
      ))}
    </div>
  );
}

export default SidebarClosed;
