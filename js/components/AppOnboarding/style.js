import { StyleSheet } from 'react-native';
import { colors, typography, windowWidth } from './../../styles/baseStyles';

export default StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
    flex: 1
  },
  background: {
    flex: 2,
    width: windowWidth,
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    marginTop: 50,
    width: windowWidth * 0.75,
    textAlign: 'center',
    fontFamily: typography.fontMain,
    fontSize: typography.headerFontSize,
    color: colors.mainBrandColor,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-end',
    marginBottom: 20,
  }
});
