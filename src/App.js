import Layout from './Components/Layout/Layout';
import './Components/style/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
// import Graph from './Components/Graph/Graph';
import IndividualOKR from './Components/OKR/IndividualOKR';
import 'react-datepicker/dist/react-datepicker.css';
import { useCallback, useState } from 'react';
import SuccessAlert from './Components/reusable/SuccessAlert';

function App() {
  const [successAlert, setSuccessAlert] = useState({
    showAlert: false,
    alertMessage: '',
    alertSeverity: 'success',
  });
  const handleAlertClose = () => {
    setSuccessAlert((a) => ({ ...a, showAlert: false }));
  };
  const handleAlert = useCallback(
    (msg, severity) => {
      if (severity !== undefined) {
        setSuccessAlert(() => ({
          showAlert: true,
          alertMessage: msg,
          alertSeverity: severity,
        }));
      } else {
        setSuccessAlert((a) => ({
          ...a,
          showAlert: true,
          alertMessage: msg,
        }));
      }
    },
    [setSuccessAlert],
  );

  return (
    <div className='App'>
      {successAlert.showAlert && (
        <SuccessAlert
          successAlert={successAlert}
          setSuccessAlert={setSuccessAlert}
          handleAlertClose={handleAlertClose}
        />
      )}

      <Routes>
        <Route exact restricted={true} path='/:organisationUrl/*' element={<Layout />}>
          <Route exact path='alignments' element={<div>Comming Soon...</div>} />
          <Route path='action-center' exact element={<div>Comming Soon...</div>} />
          <Route path='dependencies' exact element={<div>Comming Soon...</div>} />
          <Route path='notes' exact element={<div>Comming Soon...</div>} />
          <Route path='company-dashboard' exact element={<div>Comming Soon...</div>} />
          <Route path='dept-hierarchy' exact element={<div>Comming Soon...</div>} />
          <Route path='news-feed' exact element={<div>Comming Soon...</div>} />
          <Route path='org-hierarchy' exact element={<div>Comming Soon...</div>} />
          {/* <Route path='all' element={<IndividualOKR handleAlert={handleAlert} />} /> */}
          <Route path='IndividualOKRs' element={<IndividualOKR handleAlert={handleAlert} />} />
          <Route path='CorporateOKRs' element={<div>Comming Soon...</div>} />
          <Route path='individual' exact element={<div>Comming Soon...</div>} />
          <Route path='developer' exact element={<div>Comming Soon...</div>} />
          <Route path='org' exact element={<div>Comming Soon...</div>} />
          <Route path='watched' exact element={<div>Comming Soon...</div>} />
          <Route path='shared' exact element={<div>Comming Soon...</div>} />
          <Route path='emplyee' exact element={<div>Comming Soon...</div>} />
          <Route path='department' exact element={<div>Comming Soon...</div>} />
          <Route path='manager' exact element={<div>Comming Soon...</div>} />
          <Route path='*' exact element={<div>Comming Soon...</div>} />
          <Route path='my-task' exact element={<div>Comming Soon...</div>} />
          <Route path='task-others' exact element={<div>Comming Soon...</div>} />
          <Route path='org-task' exact element={<div>Comming Soon...</div>} />
          <Route path='empl-task' exact element={<div>Comming Soon...</div>} />
          <Route path='received' exact element={<div>Comming Soon...</div>} />
          <Route path='given' exact element={<div>Comming Soon...</div>} />
          <Route path='award-received' exact element={<div>Comming Soon...</div>} />
          <Route path='award-given' exact element={<div>Comming Soon...</div>} />
        </Route>
        <Route path='*' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
