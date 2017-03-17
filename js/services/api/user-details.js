import api from './base';

const getUserDetails = (userId) => {
  return api.get(`/userDetails/${userId}`)
    .then((result) => {
      return result;
    })
    .catch((error) => {
      console.log(error);
    });
};

const create = (userId, data) => {
  return api.set(`/userDetails/${userId}`, data)
    .then(() => {
      console.log('User details added');
    })
    .catch((error) => {
      console.log(error);
    });
};

const update = (userId, data) => {
  return api.change(`/userDetails/${userId}`, data)
    .then(() => {
      console.log('User details modified');
    })
    .catch((error) => {
      console.log(error);
    });
};

export default {
  get: getUserDetails,
  create,
  update,
};
