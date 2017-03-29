import potlucks from '../../services/api/pot-lucks';

// actions
const SET_INITIAL_STATE = 'SET_INITIAL_STATE';
const CHANGE_NUMBER_OF_GUESTS = 'CHANGE_NUMBER_OF_GUESTS';
const ADD_POTLUCK_ITEM = 'ADD_POTLUCK_ITEM';
const REMOVE_POTLUCK_ITEM = 'REMOVE_POTLUCK_ITEM';
const ADD_INFO = 'ADD_INFO';
const ADD_INVITES = 'ADD_INVITES';
const SET_CREATE_MESSAGE = 'SET_CREATE_MESSAGE';
const ADD_IMAGE = 'ADD_IMAGE';

// action creators
export const setNewPotluckInitialState = () => ({ type: SET_INITIAL_STATE, payload: null });
export const changeNumberofGuests = data => ({ type: CHANGE_NUMBER_OF_GUESTS, payload: data });
export const addPotluckItem = data => ({ type: ADD_POTLUCK_ITEM, payload: data });
export const removePotluckItem = data => ({ type: REMOVE_POTLUCK_ITEM, payload: data });
export const addInfo = data => ({ type: ADD_INFO, payload: data });
export const addImage = data => ({ type: ADD_IMAGE, payload: data });
export const addInvites = data => ({ type: ADD_INVITES, payload: data });
export const setCreateResult = data => ({ type: SET_CREATE_MESSAGE, payload: data });

// thunks
export const createNewPotluck = (newPotluck, userId) => (dispatch) => {
  potlucks.createPotluck(newPotluck, userId)
    .then((result) => {
      dispatch(setCreateResult(result));
      dispatch(setNewPotluckInitialState());
    })
    .catch((error) => {
      console.log(error);
    });
};

export const imageUpload = (base64) => (dispatch) => {
  const formdata = new FormData();
  formdata.append('image', base64);
  fetch('https://api.imgur.com/3/upload', {
    method: 'POST',
    headers: {
      Authorization: 'Client-ID cdcdee2c87c642f',
    },
    body: formdata
  }).then(response => JSON.parse(response._bodyText))
    .then((json) => dispatch(addImage(json)))
    .catch(error => console.warn('fetch error:', error));
};
