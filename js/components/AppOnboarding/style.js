import { StyleSheet } from 'react-native';
import { colors, typography, windowWidth } from './../../styles/baseStyles';

export default StyleSheet.create({
  background: {
    flex: 2,
    width: windowWidth,
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
  },
  yellowseperator: {
    flex: 0.25,
    height: 165,
    backgroundColor: colors.mainBrandYellow
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    // fontSize: typography.baseFontSize,
    // fontFamily: typography.fontMain,
    marginTop: 50,
    width: windowWidth * 0.75,
    textAlign: 'center',
    fontSize: typography.headerFontSize,
    color: colors.mainBrandColor,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  mainContainer: {
    backgroundColor: 'white',
    flex: 1
  }
});
