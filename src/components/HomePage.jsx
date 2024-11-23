import Sidebar from "./page/sidebar";
import VideoGrid from "./page/VideoGrid";
import Suggestionbar from "./page/suggestionbar";

function HomePage() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="">
        <Suggestionbar />
        <VideoGrid />
      </div>
    </div>
  );
}

export default HomePage;
