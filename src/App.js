import './App.css';
import Layout from './Components/Layout/Layout';
import './Components/style/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route exact restricted={true} path='/:organisationUrl/*' element={<Layout />} />
        <Route path='*' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
