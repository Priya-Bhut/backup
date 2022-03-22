import './Components/style/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import 'react-datepicker/dist/react-datepicker.css';
import { useCallback, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import PublicRouting from './Components/routing/PublicRouting';
import PrivateRoute from './Components/routing/PrivateRoute';
import ProtectedRoute from './Components/routing/ProtectedRoute';
import Login from './Components/SignIn/Login';
import SignUp from './Components/SignUp/SignUp';
import ForgotPassword from './Components/ResetPassword/ForgotPassword';
import ResetPassword from './Components/ResetPassword/ResetPassword';
import NotFound from './Components/NotFound';
import Layout from './Components/Layout/Layout';
import LoginOrganisation from './Components/OrganisationMenu/LoginOrganisation';
import IndividualOKR from './Components/OKR/IndividualOKR';
import Graph from './Components/Graph/Graph';
import SuccessAlert from './Components/reusable/SuccessAlert';
// import Home from './Components/Home/Home';

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
          <Route path='' exact element={<div>Comming Soon</div>} />
          <Route exact path='alignments' element={<Graph />} />
          <Route exact path='action-center' element={<IndividualOKR handleAlert={handleAlert} />} />
          {/* <Route path='*' exact element={<div>Coming Soon...</div>} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
