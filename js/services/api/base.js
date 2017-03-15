import { firebaseApp } from '../../../config/firebase';

const FIRBASE_VALUE_TYPE = 'value';

// get user authentication code
// const userId = firebaseApp.auth().currentUser.uid;

const get = (path) => {
  return firebaseApp.database()
    .ref(path)
    .once(FIRBASE_VALUE_TYPE)
    .then((snapshot) => {
      return snapshot.val();
    });
};

const push = (path, data) => {
  return firebaseApp.database()
  .ref(path)
  .push(data);
   // return new Id?
};

// for update - TODO multiple path updates
const change = (path, data) => {
  return firebaseApp.database()
  .ref(path)
  .update(data);
};

// for delete - TODO multiple delete with .update(null)
const remove = (path) => {
  return firebaseApp.database()
  .ref(path)
  .remove();
};

export default {
  get,
  push,
  change,
  remove,
};
