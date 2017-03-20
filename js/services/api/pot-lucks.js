import api from './base';

const getPotLucks = () => {
  return api.get('/potLucks');
};

const create = (data) => {
  return api.change('/potLucks', data);
  // TODO add other inserts for child objects
};

export default {
  getPotLucks,
  create,
};
