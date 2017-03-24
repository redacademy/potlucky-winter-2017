// actions

const CHANGE_NUMBER_OF_GUESTS = 'CHANGE_NUMBER_OF_GUESTS';
const ADD_POTLUCK_ITEM = 'ADD_POTLUCK_ITEM';
const ADD_INFO = 'ADD_INFO';
const ADD_INVITES = 'ADD_INVITES';

// action creators

export const changeNumberofGuests = data => ({ type: CHANGE_NUMBER_OF_GUESTS, payload: data });
export const addPotluckItem = data => ({ type: ADD_POTLUCK_ITEM, payload: data });
export const addInfo = data => ({ type: ADD_INFO, payload: data });
export const addInvites = data => ({ type: ADD_INVITES, payload: data });



