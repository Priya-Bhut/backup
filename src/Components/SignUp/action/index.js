import axios from 'axios';
import idx from 'idx';
import { apiUrl as API_URL } from '../../../clientConfig';

export function doSignUp(data) {
  return () =>
    axios({
      method: 'post',
      url: `${API_URL}user/signUp`,
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
