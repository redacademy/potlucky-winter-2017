import { StyleSheet } from 'react-native';
import Main, { typography, colors } from '../../styles/baseStyles';

export const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    height: 220,
  },
  container: {
    flex: 0.75,
    alignItems: 'center'
  },
  button: {
    height: 100,
    flex: 1,
    backgroundColor: colors.secondaryBtnColor,
    justifyContent: 'center'
  },
  buttonText: {
    textAlign: 'center',
  },
  login: {
    height: 55,
    width: 320,
    padding: 5,
    flex: 1,
    borderColor: colors.mainBrandColor,
    borderWidth: 1,
    color: Main.loginInput.color,
    fontFamily: Main.loginInput.fontFamily,
    fontSize: Main.loginInput.fontSize,
    borderRadius: 5,
  },
  errorMessage: {
    flex: 1,
    color: Main.loginInput.color,
    fontFamily: Main.loginInput.fontFamily,
    fontSize: typography.smallestFontSize,
    backgroundColor: 'transparent'
  },
  errorContainer: {
    height: 50,
    flex: 0.30,
    flexDirection: 'row',
  }
});
