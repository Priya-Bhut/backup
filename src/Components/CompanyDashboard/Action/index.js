import axios from 'axios';
import idx from 'idx';
import { okrUrl as API_URL } from '../../../clientConfig';

export const getDashboard = (organisationUrl = '') => {
  return () =>
    axios({
      method: 'get',
      url: `${API_URL}${organisationUrl}/dashboard`,
    })
      .then((response) => {
        if (response?.data) {
          return response?.data;
        }
        return response;
      })
      .catch((error) => idx(error, (_) => _.response.data));
};
