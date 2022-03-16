import axios from 'axios';
import idx from 'idx';
import { apiUrl as API_URL } from '../../../clientConfig';

export const addObjective = (data) => {
  return () =>
    axios({
      method: 'post',
      url: `${API_URL}objective`,
      data,
    })
      .then((response) => {
        if (response?.data) {
          return response?.data;
        }
        return response.data;
      })
      .catch((error) => idx(error, (_) => _.response.data));
};

export const getObjective = () => {
  return () =>
    axios({
      method: 'get',
      url: `${API_URL}objective`,
    })
      .then((response) => {
        if (response?.data) {
          return response?.data;
        }
        return response.data;
      })
      .catch((error) => idx(error, (_) => _.response.data));
};
