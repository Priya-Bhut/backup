import axios from 'axios';
import idx from 'idx';
// import { sessionService } from 'redux-react-session';
import { apiUrl as API_URL } from '../../../clientConfig';

// function updateUserData(data) {
// 	localStorage.setItem('user', JSON.stringify(data));
// 	sessionService.saveUser(JSON.parse(localStorage.getItem('user')));
// }

//   export function storeToken(data) {
// 	return {
// 	  type: 'STORE_TOKEN',
// 	  token: data,
// 	};
//   }

export function doLogin(data) {
  return () =>
    axios({
      method: 'post',
      url: `${API_URL}user/logIn`,
      data,
    })
      .then((response) => {
        if (response?.data) {
          localStorage.setItem('token', response.data?.token);
          localStorage.setItem('empid', response.data?.empId);
          localStorage.setItem('user', JSON.stringify(response.data));
          return response.data;
        }
        return response;
      })
      .catch((error) => idx(error, (_) => _.response.data));
}
