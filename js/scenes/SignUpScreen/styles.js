import { StyleSheet } from 'react-native';
import Main, { typography, colors } from '../../styles/baseStyles';

export const styles = StyleSheet.create({
  mainContainer: {
    paddingTop: 29,
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white'
  },
  container: {
    alignItems: 'center',
    height: 62
  },
  button: {
    height: 60,
    width: '100%',
    backgroundColor: colors.secondaryBtnColor,
    justifyContent: 'center'
  },
  buttonText: {
    fontFamily: typography.fontMain,
    textAlign: 'center',
    color: 'white',
  },
  login: {
    height: 50,
    width: 320,
    padding: 5,
    borderColor: colors.mainBrandColor,
    borderWidth: 1,
    color: Main.loginInput.color,
    fontFamily: Main.loginInput.fontFamily,
    fontSize: typography.baseFontSize,
    borderRadius: 25,
    paddingLeft: 22,
    paddingRight: 22,
  },
  errorMessage: {
    color: Main.loginInput.color,
    fontFamily: Main.loginInput.fontFamily,
    fontSize: typography.smallestFontSize,
    backgroundColor: 'transparent'
  },
  errorContainer: {
    height: 15,
  }
});
