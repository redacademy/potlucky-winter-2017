import { StyleSheet } from 'react-native';
import { colors, typography, windowWidth } from './../../styles/baseStyles';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white'
  },
  image: {
    flex: 0,
    height: 100,
    width: windowWidth,
    resizeMode: 'contain',
  },
  header: {
    textAlign: 'center',
    fontSize: typography.headerFontSize,
    fontFamily: typography.fontMain,
    fontWeight: 'bold',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    height: 50,
    width: 250,
    backgroundColor: colors.primaryBtnColor
  },
  buttonText: {
    fontFamily: typography.fontMain,
    textAlign: 'center',
  }
});
