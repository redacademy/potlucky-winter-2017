export const changeNumberofGuests = number => ({
  type: 'changeNumberofGuests',
  payload: number
});

export const addPotluckItem = name => ({
  type: 'ADD_POTLUCK_ITEM',
  payload: name
});
