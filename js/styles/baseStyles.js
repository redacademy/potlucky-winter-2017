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
  saladsColor: '#D8D8D8',
  foodIndicatorBG: '#E1E1E1',
}

export const typography = {
  smallestFontSize: '10px',
  baseFontSize: '14px',
  headerFontSize: '24px',
  fontMain: 'Ubuntu-R.ttf',
  fontMainLight: 'Ubuntu-L.ttf',
  fontMainMedium: 'Ubuntu-M.ttf',
  fontMainBold: 'Ubuntu-B.ttf',
}

export default StyleSheet.create({
  headerPrimary: {
    fontSize: colors.headerSize,
    fontFamily: colors.fontMainMedium,
    color: colors.mainBrandColor,
  },
  headerSecondary: {
    fontSize: typography.headerFontSize,
    fontFamily: typography.fontMainMedium,
    color: 'white',
  },
  loginInput: {
    fontSize: typography.baseFontSize,
    fontFamily: typography.fontMainLight,
    color: colors.mainBrandColor,
  },
  tutorialMain: {
    fontSize: '20px',
    fontFamily: typography.fontMain,
    color: typography.mainBrandColor,
    lineHeight: '24px',
  },
  progressNumber: {
    fontSize: typography.baseSize,
    fontFamily: typography.fontMainMedium,
    color: 'white',
  },
  guestNumber: {
    fontSize: '50px',
    fontFamily: typography.fontMainMedium,
    color: 'black',
  },
  appetizerTitle: {
    fontSize: typography.baseFontSize,
    fontFamily: typography.fontMainBold,
    color: colors.mainBrandColor,
  },
  mainCourseTitle: {
    fontSize: typography.baseFontSize,
    fontfamily: typography.fontMainBold,
    color: colors.mainBrand,
  }
});