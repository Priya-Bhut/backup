import "./App.css";
import "./Components/Styles/style.css";
import SideMenu from "./Components/NavBar/sideMenu";
import RightBody from "./Components/RightBody";
import { useState } from "react";

function App() {
  const [showExpandedMenu, setExpendedMenu] = useState(false);
  const [expandData, setExpandData] = useState([]);
  return (
    <div className="App">
      <RightBody doShrink={showExpandedMenu} />
      <SideMenu
        data={expandData}
        dataSetter={setExpandData}
        setterFunction={setExpendedMenu}
      />
    </div>
  );
}

export default App;
