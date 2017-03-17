import api from './base';

const getUserDetails = (userId) => {
  return api.get(`/userDetails/${userId}`);
};

const create = (userId, data) => {
  return api.set(`/userDetails/${userId}`, data);
};

const update = (userId, data) => {
  return api.change(`/userDetails/${userId}`, data);
};

export default {
  get: getUserDetails,
  create,
  update,
};
