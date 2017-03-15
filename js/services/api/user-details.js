// import userDetails from 'services/api/user-details
// userDetails.get()
// userDetails.create()
// userDetails.update()

import { get, set, change, remove } from './base';

const getUserDetails = (userId) => {
  return get(`/userDetails/${userId}`);
}

const create = (data) => {
  return set('/userDetails', data);
}

const update = (userId, data) => {
  return change(`/userDetails/${userId}`, data)
};

export default {
  get: getUserDetails,
  create,
  update,
};
