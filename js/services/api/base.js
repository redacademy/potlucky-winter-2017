import firebase from 'firebase';

const FIRBASE_VALUE_TYPE = 'value';

const get = (path) => {
  return firebase.database()
    .ref(path)
    .once(FIRBASE_VALUE_TYPE)
    .then((snapshot) => {
      return snapshot.val();
    });
};

// to add data with the id created by firebase
const push = (path, data) => {
  return firebase.database()
  .ref(path)
  .push(data);
   // return new Id?
};

// to add data with the id provided by client
const set = (path, data) => {
  return firebase.database()
  .ref(path)
  .set(data);
};

// for update - TODO multiple path updates
const change = (path, data) => {
  return firebase.database()
  .ref(path)
  .update(data);
};

// for delete - TODO multiple delete with .update(null)
const remove = (path) => {
  return firebase.database()
  .ref(path)
  .remove();
};

export default {
  get,
  push,
  set,
  change,
  remove,
};
