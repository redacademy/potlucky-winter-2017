import firebase from 'firebase';
import moment from 'moment';
import api from './base';
import { decodeObjectKeys } from '../../helpers';

const getDetailsForEmail = (email) => {
  return firebase
    .database()
    .ref()
    .child('userDetails')
    .orderByChild('emailAddress')
    .equalTo(email)
    .once('value');
};

const deleteExistingUserGuestInvite = (potluckId, email) => {
  firebase.database()
    .ref()
    .child(`potLuckInvites/${potluckId}/guests/${btoa(email)}`)
    .remove();
};

const processEmailInvites = (potluckId, guestEmails) => {
  const decodedGuestEmails = decodeObjectKeys(guestEmails.guests);

  // get uIds for existing users from their emails
  const promises = Object.values(decodedGuestEmails)
    .map((email) => {
      return getDetailsForEmail(email)
        .then((result) => {
          if (result.val()) {
            // delete existing user emails from potluck guest email list
            deleteExistingUserGuestInvite(potluckId, email);

            return Object.keys(result.val())[0];
          }
        });
    });

  return Promise.all(promises).then((uIds) => { 
    return uIds.filter(uId => !!uId);
  });
};

const createPotluckGuest = (potluckId, uIds) => {
  const potluckUserGuest = {
    inviteIssued: true,
    inviteIssueDate: moment(Date.now()).format('YYYY-MM-DD'),
    inviteAccepted: false,
    inviteAcceptedDate: null,
    inviteCancelled: null,
    inviteCancelledDate: null,
  };

  uIds.forEach((uId) => {
    const updates = {
      [`/potLuckGuests/${potluckId}/${uId}`]: potluckUserGuest,
    };

    return api.change(updates);
  });
};

const createUserPotluck = (potluckId, potluckInfo, uIds) => {
  const userPotluck = {
    isHost: false,
    isNew: true,
    eventDate: potluckInfo.eventDate,
    title: potluckInfo.title,
    description: potluckInfo.description,
  };

  uIds.forEach((uId) => {
    const updates = {
      [`/userPotLucks/${uId}/${potluckId}`]: userPotluck,
    };

    return api.change(updates);
  });
};

export default {
  processEmailInvites,
  createPotluckGuest,
  createUserPotluck,
  deleteExistingUserGuestInvite,
};
