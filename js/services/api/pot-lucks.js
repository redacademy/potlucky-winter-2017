import moment from 'moment';
import api from './base';
import guestInvites from './guest-invites';
import { encodeObjectValues } from '../../helpers';

const getUserPotlucks = userId => (
  api.get(`/userPotLucks/${userId}`)
    .catch((error) => {
      console.log(error);
    })
);

const getPotluckFood = potLuckId => (
  api.get(`/potLuckFood/${potLuckId}`)
    .catch((error) => {
      console.log(error);
    })
);

const getPotluck = potLuckId => (
  api.get(`/potLucks/${potLuckId}`)
    .catch((error) => {
      console.log(error);
    })
);

const actionInvite = (data, potluckId, userId) => {
  const potluckInviteResponse = {
    [data.inviteSelection]: true,
    dateStamp: moment().format('YYYY-MM-DD'),
  };

  const updates = {
    [`/potLuckGuests/${potluckId}/${userId}`]: potluckInviteResponse,
    [`/userPotLucks/${userId}/${potluckId}/isNew`]: false,
  };

  return api.change(updates)
    .then(() => (
      `${data.inviteSelection} chosen for potluck: ${potluckId}`
    ))
    .catch((error) => {
      console.log(error);
    });
};

const submitFoodItem = (data, potLuckId, foodItem, userId) => {
  const updates = {
    [`/potLuckFood/${potLuckId}/${foodItem}/assignments/${userId}`]: data
  };
  return api.change(updates);
};


const createPotluck = (data, userId) => {
  const potluck = {
    [userId]: true,
    title: data.potluckInfo.title,
    theme: data.potluckInfo.theme,
    eventDate: moment(data.potluckInfo.eventDate, ['MMM DD, YYYY']).format('YYYY-MM-DD'),
    arriveTime: moment(data.potluckInfo.arriveTime, ['h:mm A']).format('HH:mm'),
    serveTime: moment(data.potluckInfo.serveTime, ['h:mm A']).format('HH:mm'),
    location: data.potluckInfo.location,
    description: data.potluckInfo.description,
    coordinates: { lat: data.potluckInfo.coordinates.lat, lng: data.potluckInfo.coordinates.lng },
    link: data.potluckInfo.link,
  };

  let potluckFood = {
    totalDishCount: data.guestCount,
  };

  Object.keys(data.potluckFood)
    .forEach((key) => {
      potluckFood = { ...potluckFood, [key]: { desiredDishCount: data.potluckFood[key] } };
    });

  const potluckGuests = {
    eventDate: moment(data.potluckInfo.eventDate, ['MMM DD, YYYY']).format('YYYY-MM-DD'),
    guests: encodeObjectValues(data.potluckInvites),
  };

  const potluckIndex = {
    isHost: true,
    isNew: true,
    eventDate: data.potluckInfo.eventDate,
    title: data.potluckInfo.title,
    description: data.potluckInfo.description,
  };

  // get new potluck id
  const newPotluckId = api.createEmptyChild('potLucks');

  const updates = {
    [`/potLucks/${newPotluckId}`]: potluck,
    [`/potLuckFood/${newPotluckId}`]: potluckFood,
    [`/potLuckInvites/${newPotluckId}`]: potluckGuests,
    [`/userPotLucks/${userId}/${newPotluckId}`]: potluckIndex,
  };

  return api.change(updates)
    .then(() => (
      // get uIds from emails of existing users
      guestInvites.processSignInEmailInvites(newPotluckId, potluckGuests)
    ))
    .then((result) => {
      // create user pot luck invites
      guestInvites.createPotluckGuest(newPotluckId, result);

      // create sign-in user potluck invites
      guestInvites.createUserPotluck(newPotluckId, potluck, result);
    })
    .then(() => (
      `${potluck.title} saved and guests invited!`
    ))
    .catch((error) => {
      console.log(error);
    });
};

export default {
  getUserPotlucks,
  getPotluck,
  createPotluck,
  getPotluckFood,
  submitFoodItem,
  actionInvite,
};
