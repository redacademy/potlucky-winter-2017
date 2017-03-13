import { Dimensions, StyleSheet } from 'react-native';

export const windowHeight = Dimensions.get('window').height;
export const windowWidth = Dimensions.get('window').width;

export const colors = {
  mainBrandColor: '#FF8E3E',
  secondaryBrandColor: '#FFDD1E',
  tertiaryBrandColor: '#2EAEB7',
  secondaryBtnColor: '#9DDA2C',
  secondaryNavColor: '#FFBC8C',
  appetizerColor: '#93B259',
  mainCourseColor: '#37B1B0',
  saladsColor: '#D8D8D8',
  foodIndicatorBG: '#E1E1E1',
}

export const typography = {
  smallestSize: '10px',
  baseSize: '14px',
  headerSize: '24px',
  fontMain: 'Ubuntu-R.ttf',
  fontMainLight: 'Ubuntu-L.ttf',
  fontMainMedium: 'Ubuntu-M.ttf',
  fontMainBold: 'Ubuntu-B.ttf',
}

export default StyleSheet.create({
  headerPrimary: {
    fontSize: headerSize,
    fontFamily: fontMainMedium,
    color: mainBrandColor,
  },
  headerSecondary: {
    fontSize: headerSize,
    fontFamily: fontMainMedium,
    color: 'white',
  },
  loginInput: {
    fontSize: baseSize,
    fontFamily: fontMainLight,
    color: mainBrandColor,
  },
  tutorialMain: {
    fontSize: '20px',
    fontFamily: fontMain,
    color: mainBrandColor,
    lineHeight: '24px',
  },
  progressNumber: {
    fontSize: baseSize,
    fontFamily: fontMainMedium,
    color: 'white',
  },
  guestNumber: {
    fontSize: '50px',
    fontFamily: fontMainMedium,
    color: 'black',
  },
  appetizerTitle: {
    fontSize: baseSize,
    fontFamily: fontMainBold,
    color: mainBrandColor,
  },
  mainCourseTitle: {
    fontSize: baseSize,
    fontfamily: fontMainBold,
    color: mainBrand,
  }
});