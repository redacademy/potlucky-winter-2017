import api from './base';

const getUserPotLucks = (userId) => {
  return api.get(`potLuckDetails/${userId}`)
    .then((result) => {
      return result;
    })
    .catch((error) => {
      console.log(error);
    });
};

const getPotLuck = (potLuckId) => {
  return api.get(`/potLucks/${potLuckId}`)
    .then((result) => {
      return result;
    })
    .catch((error) => {
      console.log(error);
    });
};

const create = (data) => {
  // create potLuck and potLuckIndex objects
  // TODO other potLuck components
  const potLuck = {};
  potLuck[data.userId] = true;
  potLuck.title = data.title;
  potLuck.theme = data.theme;
  potLuck.eventDate = data.eventDate;
  potLuck.arriveTime = data.arriveTime;
  potLuck.serveTime = data.serveTime;
  potLuck.location = data.location;
  potLuck.description = data.description;

  const potLuckIndex = {};
  potLuckIndex.isHost = true;
  potLuckIndex.eventDate = data.eventDate;
  potLuckIndex.title = data.title;
  potLuckIndex.description = data.description;
  potLuckIndex.isNew = true;

  // get new potluck id
  const newPotLuckId = api.pushKey('potLucks');

  // Write the new post's data simultaneously in the pot lucks list and the user's pot luck list.
  const updates = {};
  updates[`/potLucks/${newPotLuckId}`] = potLuck;
  updates[`/userPotLucks/${data.userId}/${newPotLuckId}`] = potLuckIndex;

  return api.change(updates)
    .then(() => {
      console.log('Pot luck added');
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
