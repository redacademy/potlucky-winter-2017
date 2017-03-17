import firebase from 'firebase';

const FIRBASE_VALUE_TYPE = 'value';

const get = (path) => {
  // returns a promise of an actual object, not a datasnapshot
  return firebase.database()
    .ref(path)
    .once(FIRBASE_VALUE_TYPE)
    .then((result) => {
      return result.val();
    });
};

// to add data with the id created by firebase
const push = (path, data) => {
  return firebase.database()
    .ref(path)
    .push(data);
    // return new Id?
};

const pushKey = (path) => {
  return firebase.database()
    .ref()
    .child(path)
    .push()
    .key;
};

// to add data with the id provided by client
const set = (path, data) => {
  return firebase.database()
    .ref(path)
    .set(data);
};

// for update
/* const changeOne = (path, data) => {
  return firebase.database()
    .ref(path)
    .update(data);
};*/

const change = (data) => {
  return firebase.database()
    .ref()
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
  pushKey,
  set,
  // changeOne,
  change,
  remove,
};
