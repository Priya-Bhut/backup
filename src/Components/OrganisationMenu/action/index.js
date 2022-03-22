import axios from 'axios';
import idx from 'idx';
import { apiUrl as API_URL } from '../../../clientConfig';

export function doGetMappedOrganisations() {
  return async () =>
    await axios({
      method: 'get',
      url: `${API_URL}organisations`,
      headers: {
        authorization: localStorage.getItem('token'),
      },
    })
      .then((response) => {
        if (response?.data) {
          return response.data;
        }
        return response;
      })
      .catch((error) => idx(error, (_) => _.response?.data));
}
