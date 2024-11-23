import React from "react";
import { MdHome } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { PiVideoLight } from "react-icons/pi";
import { SiYoutubemusic } from "react-icons/si";
import { MdHistory } from "react-icons/md";
import { CgPlayList } from "react-icons/cg";
import { RiVideoLine } from "react-icons/ri";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { MdFileDownload } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { HiFire } from "react-icons/hi";
import { MdOutlineShoppingBag } from "react-icons/md";
import { IoMusicalNotesSharp } from "react-icons/io5";
import { PiFilmSlateDuotone } from "react-icons/pi";
import { HiMiniSignal } from "react-icons/hi2";
import { PiGameControllerLight } from "react-icons/pi";
import { MdNewspaper } from "react-icons/md";
import { AiOutlineTrophy } from "react-icons/ai";
import { AiOutlineBulb } from "react-icons/ai";
import { GiHanger } from "react-icons/gi";
import { MdPodcasts } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { RiFlagLine } from "react-icons/ri";
import { IoHelpCircleOutline } from "react-icons/io5";
import { GoReport } from "react-icons/go";


function Sidebar(){
    return <div className="flex  pt-0" >
        
        
     
       <div className="w-60 ml-2 overflow-hidden hover:overflow-y-auto min-h-screen scrollbar-webkit h-dvh  sticky p-2 left-0 top-16 max-h-full  ">

            <div className="flex p-2 rounded-lg cursor-pointer transition-transform duration-300 ease-in-out transform  hover:bg-gray-200"> 
                <MdHome className="size-6 "/> <div className="pl-4">
                    Home
                </div>
            </div>

            <div className="flex p-2 rounded-lg cursor-pointer transition-transform duration-300 ease-in-out transform  hover:bg-gray-200"> 
                <SiYoutubeshorts className="size-6 "/> <div className="pl-4">
                    Shorts
                </div>
            </div>

            <div className="flex p-2 rounded-lg cursor-pointer transition-transform duration-300 ease-in-out transform  hover:bg-gray-200"> 
                <PiVideoLight className="size-6 "/> <div className="pl-4">
                    Subcriptions
                </div>
            </div>

            <div className="flex p-2 rounded-lg cursor-pointer transition-transform duration-300 ease-in-out transform  hover:bg-gray-200"> 
                <SiYoutubemusic className="size-6 "/> <div className="pl-4">
                    YouTube Music
                </div>
            </div>
            <div className="pt-3 pb-3">
                 <hr />
            </div>

            <div className="flex p-2 rounded-lg cursor-pointer transition-transform duration-300 ease-in-out transform  hover:bg-gray-200"> 
               <b>You</b>
                <MdOutlineKeyboardArrowRight className="size-6 "/> <div className="pl-4">
                    
                </div>
            </div>


            <div className="flex p-2 rounded-lg cursor-pointer transition-transform duration-300 ease-in-out transform  hover:bg-gray-200"> 
                <MdHistory className="size-6 "/> <div className="pl-4">
                    History
                </div>
            </div>

            <div className="flex p-2 rounded-lg cursor-pointer transition-transform duration-300 ease-in-out transform  hover:bg-gray-200"> 
                <CgPlayList className="size-6 "/> <div className="pl-4">
                    PlayList
                </div>
            </div>

            <div className="flex p-2 rounded-lg cursor-pointer transition-transform duration-300 ease-in-out transform  hover:bg-gray-200"> 
                <RiVideoLine className="size-6 "/> <div className="pl-4">
                    Your Videos
                </div>
            </div>

            <div className="flex p-2 rounded-lg cursor-pointer transition-transform duration-300 ease-in-out transform  hover:bg-gray-200"> 
                <MdOutlineWatchLater className="size-6 "/> <div className="pl-4">
                    Watch Later
                </div>
            </div>

            <div className="flex p-2 rounded-lg cursor-pointer transition-transform duration-300 ease-in-out transform  hover:bg-gray-200"> 
                <AiOutlineLike className="size-6 "/> <div className="pl-4">
                    Liked Videos
                </div>
            </div>

            <div className="flex p-2 rounded-lg cursor-pointer transition-transform duration-300 ease-in-out transform  hover:bg-gray-200"> 
                <MdFileDownload className="size-6 "/> <div className="pl-4">
                    Downloads
                </div>
            </div>

            <div className="pt-3 pb-3">
                 <hr />
            </div>

            <div className="flex p-2 rounded-lg cursor-pointer transition-transform duration-300 ease-in-out transform  hover:bg-gray-200"> 
               <b>Explore</b>
                <MdOutlineKeyboardArrowRight className="size-6 "/> <div className="pl-4">
                    
                </div>
            </div>

            <div className="flex p-2 rounded-lg cursor-pointer transition-transform duration-300 ease-in-out transform  hover:bg-gray-200"> 
                <HiFire className="size-6 "/> <div className="pl-4">
                    Trendings
                </div>
            </div>

            <div className="flex p-2 rounded-lg cursor-pointer transition-transform duration-300 ease-in-out transform  hover:bg-gray-200"> 
                <MdOutlineShoppingBag className="size-6 "/> <div className="pl-4">
                    Shopping
                </div>
            </div>

            <div className="flex p-2 rounded-lg cursor-pointer transition-transform duration-300 ease-in-out transform  hover:bg-gray-200"> 
                <IoMusicalNotesSharp className="size-6 "/> <div className="pl-4">
                    Music
                </div>
            </div>

            <div className="flex p-2 rounded-lg cursor-pointer transition-transform duration-300 ease-in-out transform  hover:bg-gray-200"> 
                <PiFilmSlateDuotone className="size-6 "/> <div className="pl-4">
                    Movies
                </div>
            </div>

            <div className="flex p-2 rounded-lg cursor-pointer transition-transform duration-300 ease-in-out transform  hover:bg-gray-200"> 
                <HiMiniSignal className="size-6 "/> <div className="pl-4">
                    Live
                </div>
            </div>

            <div className="flex p-2 rounded-lg cursor-pointer transition-transform duration-300 ease-in-out transform  hover:bg-gray-200"> 
                <PiGameControllerLight className="size-6 "/> <div className="pl-4">
                    Gaming
                </div>
            </div>

            <div className="flex p-2 rounded-lg cursor-pointer transition-transform duration-300 ease-in-out transform  hover:bg-gray-200"> 
                <MdNewspaper className="size-6 "/> <div className="pl-4">
                    News
                </div>
            </div>

            <div className="flex p-2 rounded-lg cursor-pointer transition-transform duration-300 ease-in-out transform  hover:bg-gray-200"> 
                <AiOutlineTrophy className="size-6 "/> <div className="pl-4">
                    Ssports
                </div>
            </div>

            <div className="flex p-2 rounded-lg cursor-pointer transition-transform duration-300 ease-in-out transform  hover:bg-gray-200"> 
                <AiOutlineBulb className="size-6 "/> <div className="pl-4">
                    COurses
                </div>
            </div>

            <div className="flex p-2 rounded-lg cursor-pointer transition-transform duration-300 ease-in-out transform  hover:bg-gray-200"> 
                <GiHanger className="size-6 "/> <div className="pl-4">
                    Fashion & beauty
                </div>
            </div>

            <div className="flex p-2 rounded-lg cursor-pointer transition-transform duration-300 ease-in-out transform  hover:bg-gray-200"> 
                <MdPodcasts className="size-6 "/> <div className="pl-4">
                    Podcasts
                </div>
            </div>

            <div className="pt-3 pb-3">
                 <hr />
            </div>

            <div className="flex p-2 rounded-lg cursor-pointer transition-transform duration-300 ease-in-out transform  hover:bg-gray-200"> 
                <CiSettings className="size-6 "/> <div className="pl-4">
                    Settings
                </div>
            </div>

            <div className="flex p-2 rounded-lg cursor-pointer transition-transform duration-300 ease-in-out transform  hover:bg-gray-200"> 
                <RiFlagLine className="size-6 "/> <div className="pl-4">
                    Report history
                </div>
            </div>

            <div className="flex p-2 rounded-lg cursor-pointer transition-transform duration-300 ease-in-out transform  hover:bg-gray-200"> 
                <IoHelpCircleOutline className="size-6 "/> <div className="pl-4">
                    Help
                </div>
            </div>

            <div className="flex p-2 rounded-lg cursor-pointer transition-transform duration-300 ease-in-out transform  hover:bg-gray-200"> 
                <GoReport className="size-6 "/> <div className="pl-4">
                    Send feedback
                </div>
            </div>

            <div className="pt-3 pb-3">
                 <hr />
            </div>

           <div  className="cursor-pointer text-xs font-sans ">
           <div className="p-2">
                <p>About Press Copyright Contact us Creator Advertise Developers</p>
                
            </div>
            <div className="pl-2 pr-2 pb-2">
            <p>Terms Privacy Policy & Safety How Youtube works
                    Test new features
                </p>
            </div>
            
            <span className="p-2 text-gray-600 ">@sagolsa LLC</span>
           </div>
        </div>
    </div>
}
export default Sidebar;
