import React from 'react';
import './Components/Styles/style.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import IndividualOKR from './Components/OKR/IndividualOKR';
import Graph from './Components/Graph/Graph';
function App() {
  return (
    <div>
      <Routes>
        <Route exact path='*' element={<Layout />}>
          <Route path='home' exact element={<IndividualOKR />} />
          <Route path='graph' exact element={<Graph />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
