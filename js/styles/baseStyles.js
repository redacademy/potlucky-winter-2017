import { Dimensions, StyleSheet } from 'react-native';

export const windowHeight = Dimensions.get('window').height;
export const windowWidth = Dimensions.get('window').width;

export const colors = {
  mainBrandColor: '#FF8E3E',
  secondaryBrandColor: '#FFDD1E',
  tertiaryBrandColor: '#2EAEB7',
  primaryBtnColor: '#FF8E3E',
  secondaryBtnColor: '#9DDA2C',
  primaryNavColor: '#FF8E3E',
  secondaryNavColor: '#FFBC8C',
  appetizerColor: '#93B259',
  mainCourseColor: '#37B1B0',
  borderColorGray: '#979797',
  saladsColor: '#E8CD38',
  dessertsColor: '#542722',
  drinksColor: '#F7931E',
  chipInColor: '#93B259',
  talentColor: '#37B1B0',
  customColor: '#E8CD38',
  courseIndicatorBG: '#E1E1E1',
  courseIndicatorColor: '#747474',
  invitePrimaryBtn: '#82B426',
  inviteSecondaryBtn: '#9DDA2C',
};

export const typography = {
  smallestFontSize: 10,
  baseFontSize: 14,
  headerFontSize: 24,
  fontMain: 'Ubuntu',
  fontMainLight: 'Ubuntu Light',
  fontMainMedium: 'Ubuntu Medium',
  fontMainBold: 'Ubuntu Bold',
};

export default StyleSheet.create({
  headerPrimary: {
    fontSize: colors.headerSize,
    //fontFamily: colors.fontMainMedium,
    color: colors.mainBrandColor,
  },
  headerSecondary: {
    fontSize: typography.headerFontSize,
    //fontFamily: typography.fontMainMedium,
    color: 'white',
  },
  loginInput: {
    fontSize: typography.baseFontSize,
    //fontFamily: typography.fontMainLight,
    color: colors.mainBrandColor,
  },
  tutorialMain: {
    fontSize: 20,
    //fontFamily: typography.fontMain,
    color: typography.mainBrandColor,
    lineHeight: 24,
  },
  progressNumber: {
    fontSize: typography.baseSize,
    //fontFamily: typography.fontMainMedium,
    color: 'white',
  },
  guestNumber: {
    fontSize: 50,
    //fontFamily: typography.fontMainMedium,
    color: colors.courseIndicatorColor,
    textAlign: 'center'
  },
  foodIndicatorText: {
    fontSize: typography.smallestFontSize,
    color: typography.foodIndicatorText
  }
});
