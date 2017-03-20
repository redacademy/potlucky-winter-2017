export const progressBar = {
  FIRST_SCREEN: 1,
  SECOND_SCREEN: 2,
  THIRD_SCREEN: 3,
  FOURTH_SCREEN: 4,
  FIFTH_SCREEN: 5,
};

export const potluckFood = {
  APPETIZERS: 'Appetizers',
  MAINS: 'Mains',
  SALADS: 'Salads',
  DESSERTS: 'Desserts',
  DRINKS: 'Drinks',
  CHIPIN: 'ChipIn',
  TALENT: 'Talent',
  CUSTOM: 'Custom',

  properties: {
    Appetizers: {
      imageSource: require('../assets/images/app.png')
    },
    Mains: {
      imageSource: require('../assets/images/Group 4.png')
    },
    Salads: {
      imageSource: require('../assets/images/salad.png')
    },
    Desserts: {
      imageSource: require('../assets/images/dess.png')
    },
    Drinks: {
      imageSource: require('../assets/images/dr.png')
    },
    ChipIn: {
      imageSource: require('../assets/images/chip-in.png')
    },
    Talent: {
      imageSource: require('../assets/images/talent.png')
    },
    Custom: {
      imageSource: require('../assets/images/custom.png')
    },
  }
};

export const potluckFoodDisplayOrder = [
  potluckFood.APPETIZERS,
  potluckFood.MAINS,
  potluckFood.SALADS,
  potluckFood.DESSERTS,
  potluckFood.DRINKS,
  potluckFood.CHIPIN,
  potluckFood.TALENT,
  potluckFood.CUSTOM
];
