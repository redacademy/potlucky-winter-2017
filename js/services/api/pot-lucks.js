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
  const userId = data.userId;
  const potLuck = { ...data, [userId]: true };

  const potLuckIndex = {
    isHost: true,
    isNew: true,
    eventDate: data.eventDate,
    title: data.title,
    description: data.description,
  };

  // get new potluck id
  const newPotLuckId = api.createEmptyChild('potLucks');

  // Write the new post's data simultaneously in the pot lucks list and the user's pot luck list.
  const updates = {
    [`/potLucks/${newPotLuckId}`]: potLuck,
    [`/userPotLucks/${data.userId}/${newPotLuckId}`]: potLuckIndex
  };

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
