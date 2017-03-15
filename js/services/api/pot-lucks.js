import api from './base';

export const create = data => {
   return api.set('/potluck', data);
   // TODO add other inserts for child objects
};

export default {
  create,
}