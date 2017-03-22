// actions

const ADD_GUESTS = 'ADD_GUESTS';
const ADD_FOOD_ITEM = 'ADD_FOOD_ITEM';
const ADD_INFO = 'ADD_INFO';
const ADD_INVITES = 'ADD_INVITES';

// action creators

export const addGuests = data => ({ type: ADD_GUESTS, payload: data });
export const addFoodItem = data => ({ type: ADD_FOOD_ITEM, payload: data });
export const addInfo = data => ({ type: ADD_INFO, payload: data });
export const addInvited = data => ({ type: ADD_INVITES, payload: data });



