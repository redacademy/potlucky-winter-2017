import { firebaseApp } from '../../config/firebase';

// get userID
const userId = firebaseApp.auth().currentUser.uid;

// for select
const get = (path) => {
  return firebaseApp.database()
    .ref(path+userId)
    .once('value')
    .then((snapshot) => {
      return snapshot.val(); // return?
    // ...
    });
}

// for insert
const set = (path, data) => {
  return firebaseApp.database()
  .ref(path+userId)
  .set(data);
}

// for update - TODO multiple path updates
const change = (path, data) => {
  return firebaseApp.database()
  .ref(path+userId)
  .update(data);
}

// for delete
// const remove = 

// end points
export const = 

export const createPotluck = data => {
   return set('/potluck', data);
};

/*
var userId = firebase.auth().currentUser.uid;

return firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
  var username = snapshot.val().username;
  // ...
});

function writeUserData(userId, name, email, imageUrl) {
  firebase.database().ref('users/' + userId).set({
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}
*/

/*
// to use
import api from '...'

api.createPotluck(data);
*/
