import React from 'react';
import './Components/Styles/style.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import IndividualOKR from './Components/OKR/IndividualOKR';
function App() {
  // const [showExpandedMenu, setExpendedMenu] = useState(false);
  return (
    <div className='App'>
      <Routes>
        {/* <Route exact path='/Home' element={<Home />} />
        <Route exact path='/okrs' element={<Okr />} />
        <Route exact path='/tasks' element={<Task />} />
        <Route exact path='/cfrs' element={<Cfr />} />
        <Route path='*' element={<Home />} /> */}
        <Route exact path='*' element={<Layout />}>
          <Route path='home' exact element={<IndividualOKR />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
