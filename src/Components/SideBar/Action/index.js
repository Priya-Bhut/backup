import axios from 'axios';
import idx from 'idx';
import { okrUrl as API_URL } from '../../../clientConfig';

export const updateKeyResult = (organisationUrl = '', data) => {
  return () =>
    axios({
      method: 'put',
      url: `${API_URL}${organisationUrl}/keyresult`,
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
