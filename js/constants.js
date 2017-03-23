import { colors } from './styles/baseStyles';

export const progressBar = {
  FIRST_SCREEN: 1,
  SECOND_SCREEN: 2,
  THIRD_SCREEN: 3,
  FOURTH_SCREEN: 4,
  FIFTH_SCREEN: 5,
};

export const POTLUCK_FOOD = {
  APPETIZERS: {
    name: 'Appetizers',
    imageSource: require('../assets/images/app.png'),
    color: colors.appetizerColor,
  },
  MAINS: {
    name: 'Mains',
    imageSource: require('../assets/images/Group 4.png'),
    color: colors.mainCourseColor,
  },
  SALADS: {
    name: 'Salads',
    imageSource: require('../assets/images/salad.png'),
    color: colors.saladsColor,
  },
  DESSERTS: {
    name: 'Desserts',
    imageSource: require('../assets/images/dess.png'),
    color: colors.dessertsColor,
  },
  DRINKS: {
    name: 'Drinks',
    imageSource: require('../assets/images/dr.png'),
    color: colors.drinksColor,
  },
  CHIPIN: {
    name: 'Chip In',
    imageSource: require('../assets/images/chip-in.png'),
    color: colors.chipInColor,
  },
  TALENT: {
    name: 'Talent',
    imageSource: require('../assets/images/talent.png'),
    color: colors.saladsColor,
  },
  CUSTOM: {
    name: 'Custom',
    imageSource: require('../assets/images/custom.png'),
    color: colors.customColor,
  },
};

export const potluckFoodDisplayOrder = [
  POTLUCK_FOOD.APPETIZERS,
  POTLUCK_FOOD.MAINS,
  POTLUCK_FOOD.SALADS,
  POTLUCK_FOOD.DESSERTS,
  POTLUCK_FOOD.DRINKS,
  POTLUCK_FOOD.CHIPIN,
  POTLUCK_FOOD.TALENT,
  POTLUCK_FOOD.CUSTOM
];
