import Sidebar from "./page/sidebar";
import VideoGrid from "./page/VideoGrid";
import Suggestionbar from "./page/suggestionbar";
import Appbar from "./page/Appbar";
import { useState } from "react";
import SidebarCLosed from "./page/SidebarCLosed";


const HomePage = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="">


      <Appbar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="flex">
      <Sidebar isOpen={isSidebarOpen} />
      <SidebarCLosed className="sticky"/>


      <div className={`flex-1 transition-all duration-300 ${isSidebarOpen ? "ml-64" : "ml-6"

        }`}>
        <Suggestionbar />
        <VideoGrid />
      </div>
      </div>
    </div>
  );
}

export default HomePage;
