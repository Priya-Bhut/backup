import axios from 'axios';
import idx from 'idx';
import { okrUrl as API_URL } from '../../../clientConfig';

export const addObjective = (organisationUrl = '', data) => {
  return () =>
    axios({
      method: 'post',
      url: `${API_URL}${organisationUrl}/objective`,
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

export const addKeyResult = (organisationUrl = '', data) => {
  return () =>
    axios({
      method: 'post',
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

export const getObjective = (organisationUrl = '') => {
  return () =>
    axios({
      method: 'get',
      url: `${API_URL}${organisationUrl}/objective`,
    })
      .then((response) => {
        if (response?.data) {
          return response?.data;
        }
        return response.data;
      })
      .catch((error) => idx(error, (_) => _.response.data));
};
