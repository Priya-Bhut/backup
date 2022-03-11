import './App.css';
import './Components/Styles/style.css';
import SideMenu from './Components/NavBar/SideMenu';
import RightBody from './Components/RightBody/RightBody';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/initialComponents/Home';
import Okr from './Components/initialComponents/Okr';
import Task from './Components/initialComponents/Task';
import Cfr from './Components/initialComponents/Cfr';

function App() {
  const [showExpandedMenu, setExpendedMenu] = useState(false);
  return (
    <div className='App'>
      <RightBody doShrink={showExpandedMenu} />
      <SideMenu showExpandedMenu={showExpandedMenu} setExpendedMenu={setExpendedMenu} />
      <Routes>
        <Route exact path='/Home' element={<Home />} />
        <Route exact path='/okrs' element={<Okr />} />
        <Route exact path='/tasks' element={<Task />} />
        <Route exact path='/cfrs' element={<Cfr />} />
        <Route path='*' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
