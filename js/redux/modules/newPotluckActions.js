// actions

const ADD_GUESTS = 'ADD_GUESTS';
const ADD_FOOD = 'ADD_FOOD';
const ADD_INFO = 'ADD_INFO';
const ADD_INVITES = 'ADD_INVITES';

// action creators

export const addGuests = data => ({ type: ADD_GUESTS, payload: data });
export const addFood = data => ({ type: ADD_FOOD, payload: data });
export const addInfo = data => ({ type: ADD_INFO, payload: data });
export const addInvited = data => ({ type: ADD_INVITES, payload: data });



