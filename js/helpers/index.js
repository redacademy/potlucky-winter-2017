export const addIdToObject = (object) => {
  for (const prop in object) {
    object[prop].id = prop;
  }
};
