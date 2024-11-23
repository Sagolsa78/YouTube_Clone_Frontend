
import Appbar from "./components/page/Appbar";
import HomePage from "./components/HomePage";
import { useAuth } from "./context/AuthProvider";


function App() {
  const {loading,data}=useAuth();
  console.log(data);
  console.log(loading);

  return <div>


    <div>

      <Appbar />  

      <HomePage  />  


    </div>

  </div>
}

export default App;
