import './Components/style/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import { Route, Routes } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';
import { useCallback, useState } from 'react';
import PublicRouting from './Components/routing/PublicRouting';
import PrivateRoute from './Components/routing/PrivateRoute';
import ProtectedRoute from './Components/routing/ProtectedRoute';
import Login from './Components/SignIn/Login';
import SignUp from './Components/SignUp/SignUp';
import ForgotPassword from './Components/ResetPassword/ForgotPassword';
import ResetPassword from './Components/ResetPassword/ResetPassword';
import NotFound from './Components/NotFound';
import Layout from './Components/Layout/Layout';
import IndividualOKR from './Components/OKR/IndividualOKR';
import CorporateOKR from './Components/OKR/CorporateOKR';
import LoginOrganisation from './Components/OrganisationMenu/LoginOrganisation';
import SuccessAlert from './Components/reusable/SuccessAlert';
import CompanyDashboard from './Components/CompanyDashboard/CompanyDashboard';
import OKR from './pages/OKR';

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
        <Route exact restricted={true} path='/*' element={<NotFound />} />
        <Route
          exact
          restricted={true}
          path='/login'
          element={
            <PublicRouting>
              <Login handleAlert={handleAlert} />
            </PublicRouting>
          }
        />

        <Route
          exact
          restricted={true}
          path='/signUp'
          element={
            <PublicRouting>
              <SignUp handleAlert={handleAlert} />
            </PublicRouting>
          }
        />

        <Route
          exact
          path='/forgot'
          element={
            <PublicRouting>
              <ForgotPassword handleAlert={handleAlert} />
            </PublicRouting>
          }
        />
        <Route
          exact
          path='/reset/:token'
          element={
            <PublicRouting>
              <ResetPassword handleAlert={handleAlert} />
            </PublicRouting>
          }
        />
        <Route
          exact
          restricted={true}
          path='/organisations'
          element={
            <PrivateRoute>
              <LoginOrganisation handleAlert={handleAlert} />
            </PrivateRoute>
          }
        />
        <Route
          exact
          restricted={true}
          path='/:organisationUrl/*'
          element={
            <ProtectedRoute>
              <Layout handleAlert={handleAlert} />
            </ProtectedRoute>
          }
        >
          <Route path='' exact element={<div>Comming Soon...</div>} />
          <Route exact path='alignments' element={<div>Comming Soon...</div>} />
          <Route path='action-center' exact element={<div>Comming Soon...</div>} />
          <Route path='dependencies' exact element={<div>Comming Soon...</div>} />
          <Route path='notes' exact element={<div>Comming Soon...</div>} />
          <Route path='company-dashboard' exact element={<CompanyDashboard />} />
          <Route path='dept-hierarchy' exact element={<div>Comming Soon...</div>} />
          <Route path='news-feed' exact element={<div>Comming Soon...</div>} />
          <Route path='org-hierarchy' exact element={<div>Comming Soon...</div>} />
          {/* <Route path='all' element={<OKR handleAlert={handleAlert} />} /> */}
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
          <Route path='OKR/*' exact element={<OKR handleAlert={handleAlert} />}>
            <Route path='IndividualOKR' exact element={<IndividualOKR handleAlert={handleAlert} />} />
            <Route path='CorporateOKR' exact element={<CorporateOKR handleAlert={handleAlert} />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
