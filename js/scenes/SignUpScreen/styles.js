import { StyleSheet } from 'react-native';
import Main, { typography, colors } from '../../styles/baseStyles';

export const styles = StyleSheet.create({
  mainContainer: {
    paddingTop: 29,
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  container: {
    alignItems: 'center',
    marginBottom: 5
  },
  button: {
    height: 60,
    width: '100%',
    backgroundColor: colors.secondaryBtnColor,
    justifyContent: 'center'
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
  },
  login: {
    height: 55,
    width: 320,
    paddingLeft: 17,
    paddingRight: 17,
    borderColor: colors.mainBrandColor,
    borderWidth: 1,
    color: colors.mainBrandColor,
    fontFamily: Main.loginInput.fontFamily,
    fontSize: 14,
    borderRadius: 5,
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
