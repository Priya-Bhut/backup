import Layout from './Components/Layout/Layout';
import './Components/style/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Graph from './Components/Graph/Graph';
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
          <Route exact path='alignments' element={<Graph />} />
          <Route exact path='action-center' element={<IndividualOKR handleAlert={handleAlert} />} />
          <Route path='*' exact element={<div>Coming Soon...</div>} />
        </Route>
        <Route path='*' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
