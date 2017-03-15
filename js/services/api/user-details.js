import api from './base';

const getUserDetails = (userId) => {
  return api.get(`/userDetails/${userId}`);
}

const create = (data) => {
  return api.push('/userDetails', data);
}

const update = (userId, data) => {
  return api.change(`/userDetails/${userId}`, data)
};

export default {
  get: getUserDetails,
  create,
  update,
};
