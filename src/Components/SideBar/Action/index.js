import axios from 'axios';
import idx from 'idx';
import { okrUrl as API_URL } from '../../../clientConfig';

export const addSequencedata = (data, organisationUrl = '') => {
  return () =>
    axios({
      method: 'POST',
      url: `${API_URL}${organisationUrl}/sequence`,
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
export const getSequencedata = (organisationUrl = '') => {
  return () =>
    axios({
      method: 'GET',
      url: `${API_URL}${organisationUrl}/sequence`,
    })
      .then((response) => {
        if (response?.data) {
          return response?.data;
        }
        return response.data;
      })
      .catch((error) => idx(error, (_) => _.response.data));
};
/* export const getSequencedata = (id, organisationUrl = '') => {
  return () =>
    axios({
      method: 'GET',
      url: `${API_URL}${organisationUrl}/sequence/${id}`,
    }) 
      .then((response) => {
        if (response?.data) {
          return response?.data;
        }
        return response.data;
      })
      .catch((error) => idx(error, (_) => _.response.data));
}; */
