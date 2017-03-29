export const addIdToObject = (object) => {
  for (const prop in object) {
    object[prop].id = prop;
  }
};

export const encodeObjectValues = (data) => {
  const encode = (Object.values(data))
    .map(item => btoa(item))
    .reduce((obj, cur) => { return { ...obj, [cur]: true }; }, {});

  return encode;
};

export const decodeObjectKeys = (data) => {
  const decode = Object.keys(data)
    .map(item => atob(item))
    .reduce((obj, cur, i) => { return { ...obj, [i]: cur }; }, {});

  return decode;
};

