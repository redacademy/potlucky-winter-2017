import potlucks from '../../services/api/pot-lucks';

// actions
const SET_INITIAL_STATE = 'SET_INITIAL_STATE';
const CHANGE_NUMBER_OF_GUESTS = 'CHANGE_NUMBER_OF_GUESTS';
const ADD_POTLUCK_ITEM = 'ADD_POTLUCK_ITEM';
const REMOVE_POTLUCK_ITEM = 'REMOVE_POTLUCK_ITEM';
const ADD_INFO = 'ADD_INFO';
const ADD_INVITES = 'ADD_INVITES';
const SET_CREATE_MESSAGE = 'SET_CREATE_MESSAGE';

// action creators
export const setNewPotluckInitialState = () => ({ type: SET_INITIAL_STATE, payload: null });
export const changeNumberofGuests = data => ({ type: CHANGE_NUMBER_OF_GUESTS, payload: data });
export const addPotluckItem = data => ({ type: ADD_POTLUCK_ITEM, payload: data });
export const removePotluckItem = data => ({ type: REMOVE_POTLUCK_ITEM, payload: data });
export const addInfo = data => ({ type: ADD_INFO, payload: data });
export const addInvites = data => ({ type: ADD_INVITES, payload: data });
export const setCreateResult = data => ({ type: SET_CREATE_MESSAGE, payload: data });

// thunks
export const createNewPotluck = (newPotluck, userId) => {
  return (dispatch) => {
    potlucks.createPotluck(newPotluck, userId)
      .then((result) => {
        dispatch(setCreateResult(result));
        dispatch(setNewPotluckInitialState());
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
