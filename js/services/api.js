import { firebaseApp } from '../../config/firebase';

// get user authentication code
// const userId = firebaseApp.auth().currentUser.uid;

// service
// for select
const get = (path) => {
  return firebaseApp.database()
    .ref(path)
    .once('value')
    .then((snapshot) => {
      // const data = snapshot.val();
      return snapshot.val();
    });
}

// for insert
const set = (path, data) => {
  return firebaseApp.database()
  .ref(path)
  .set(data);
   // return new Id?
}

// for update - TODO multiple path updates
const changeOne = (path, data) => {
  return firebaseApp.database()
  .ref(path)
  .update(data);
}

// for delete - TODO multiple delete with .update(null)
const removeOne = (path) => {
  return firebaseApp.database()
  .ref(path)
  .remove();
}

// end points
// docs ref: https://firebase.google.com/docs/database/web/read-and-write

// get
export const getUserDetails = (userId) => {
  return get(`/userDetails/${userId}`);
}

// set
export const createUserDetails = (data) => {
  return set('/userDetails', data);
}

export const createPotLuck = data => {
   return set('/potluck', data);
   // TODO add other inserts for child objects
};

// change
export const updateUserDetails = (userId, data) => {
  return changeOne(`/userDetails/${userId}`, data)
};

// delete
// TODO
