import api from './base';
import guestInvites from './guest-invites';

export const getUserPotLucks = (userId) => {
  return api.get(`userPotLucks/${userId}`)
    .then((result) => {
      return result;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getPotLuck = (potLuckId) => {
  return api.get(`/potLucks/${potLuckId}`)
    .then((result) => {
      return result;
    })
    .catch((error) => {
      console.log(error);
    });
};

const create = (data) => {
  const userId = data.userId;
  const potluck = { ...data, [userId]: true };
  const potluckFood = {};

  const potluckGuests = {
    eventDate: data.eventDate,
    guests: data,
  };

  const potluckIndex = {
    isHost: true,
    isNew: true,
    eventDate: data.eventDate,
    title: data.title,
    description: data.description,
  };

  // get new potluck id
  const newPotluckId = api.createEmptyChild('potLucks');

  const updates = {
    [`/potLucks/${newPotluckId}`]: potluck,
    [`/potLuckFood/${newPotluckId}`]: potluckFood,
    [`/potLuckInvites/${newPotluckId}`]: potluckGuests,
    [`/userPotLucks/${data.userId}/${newPotluckId}`]: potluckIndex,
  };

  return api.change(updates)
    .then(() => {
      // get uIds from emails of existing users
      return guestInvites.processEmailInvites(newPotluckId, potluckGuests);
    })
    .then((result) => {
      // create user pot luck invites
      guestInvites.createPotluckGuest(newPotluckId, result);

      // create sign-in user potluck invites
      guestInvites.createUserPotluck(newPotluckId, potluck, result);
    })
    .catch((error) => {
      console.log(error);
    });
};

export default {
  getUserPotLucks,
  getPotLuck,
  create,
};
