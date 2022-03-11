import "./App.css";
import "./Components/Styles/style.css";
import SideMenu from "./Components/NavBar/SideMenu";
import RightBody from "./Components/RightBody/RightBody";
import { useState } from "react";
import { Route } from "react-router-dom";
import Home from "./Components/initialComponents/Home";
import Okr from "./Components/initialComponents/Okr";
import Task from "./Components/initialComponents/Task";
import Cfr from "./Components/initialComponents/Cfr";

function App() {
  const [showExpandedMenu, setExpendedMenu] = useState(false);
  return (
    <div className="App">
      <RightBody doShrink={showExpandedMenu} />
      <SideMenu
        showExpandedMenu={showExpandedMenu}
        setExpendedMenu={setExpendedMenu}
      />
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/Home">
        <Home />
      </Route>
      <Route exact path="/okrs">
        <Okr />
      </Route>
      <Route exact path="/tasks">
        <Task />
      </Route>
      <Route exact path="/cfrs">
        <Cfr />
      </Route>
    </div>
  );
}

export default App;
