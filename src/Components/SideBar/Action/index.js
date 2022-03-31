import axios from 'axios';
import idx from 'idx';
import { okrUrl as API_URL } from '../../../clientConfig';

export const getSequenceData = (organisationUrl = '') => {
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
export const addSequenceData = (data, organisationUrl = '') => {
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
export const updateSequenceData = (data, organisationUrl = '') => {
  return () =>
    axios({
      method: 'PUT',
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
export const deleteSequenceData = (id, organisationUrl = '') => {
  return () =>
    axios({
      method: 'DELETE',
      url: `${API_URL}${organisationUrl}/sequence/${id}`,
    })
      .then((response) => {
        if (response?.data) {
          return response?.data;
        }
        return response.data;
      })
      .catch((error) => idx(error, (_) => _.response.data));
};
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
