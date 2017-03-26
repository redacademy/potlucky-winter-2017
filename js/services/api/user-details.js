import firebase from 'firebase';
import api from './base';
import guestInvites from './guest-invites';
import potlucks from './pot-lucks';

const getUserDetails = (userId) => {
  return api.get(`/userDetails/${userId}`)
    .then((result) => {
      return result;
    })
    .catch((error) => {
      console.log(error);
    });
};

const createPotluckInvites = (userId, data) => {
  const encodedEmail = btoa(data.emailAddress);

  return firebase
    .database()
    .ref()
    .child('/potLuckInvites')
    .once('value')
    .then((potluckIdResult) => {
      Object.keys(potluckIdResult.val()).forEach((key) => {
        return firebase
          .database()
          .ref(`/potLuckInvites/${key}/guests/${encodedEmail}`)
          .once('value')
          .then((emailMatch) => {
            if (emailMatch.val()) {
              // if any invites create potluck guest records
              guestInvites.createPotluckGuest(key, [userId]);

              potlucks.getPotluck(key)
                .then((result) => {
                  // create user invite records
                  guestInvites.createUserPotluck(key, result, [userId]);

                  // delete email from potluck guest email list
                  guestInvites.deleteExistingUserGuestInvite(key, data.emailAddress);
                })
                .catch((error) => {
                  console.log(error);
                });

              return true;
            }
          })
          .catch((error) => {
            console.log(error);
          });
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

const createUserDetails = (userId, data) => {
  return api.set(`/userDetails/${userId}`, data);
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
  createUserDetails,
  update,
  createPotluckInvites,
};
