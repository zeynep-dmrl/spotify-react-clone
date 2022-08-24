import SideBar from "./components/SideBar";
import Content from "./components/Content";
import BottomBar from "./components/BottomBar";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="main-container">
        <SideBar/>
        <Content/>
      </div>
      <BottomBar/>
     
    </Router>
  );
}

export default App;
