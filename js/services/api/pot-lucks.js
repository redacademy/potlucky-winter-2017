import { get, set, change, remove } from './base';

export const create = data => {
   return set('/potluck', data);
   // TODO add other inserts for child objects
};

export default {
  create,
}