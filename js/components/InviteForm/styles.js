import { StyleSheet } from 'react-native';
import Main, { typography, colors } from './../../styles/baseStyles';

export const styles = StyleSheet.create({
  container: {
    flex: 0.75,
    alignItems: 'center'
  },
  expanded: {
    flex: 4,
  },
  buttoncontainer:{
    flex: 0.25,
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
  input: {
    height: 55,
    width: 320,
    padding: 10,
    flex: 2,
    borderWidth: 0.125,
    color: Main.loginInput.color,
    fontFamily: Main.loginInput.fontFamily,
    fontSize: Main.loginInput.fontSize,
    borderRadius: 3,
  },
  inputcontainer: {
    flex: 2,
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  mainContainer: {
    paddingTop: 10,
    backgroundColor: 'white',
    height: 220,
    flex: 1,
  },
  errorMessage: {
    flex: 1,
    color: Main.loginInput.color,
    fontFamily: Main.loginInput.fontFamily,
    fontSize: typography.smallestFontSize,
    backgroundColor: 'transparent',
    textAlign: 'center'
  },
  errorContainer: {
    height: 50,
    flex: 0.30,
    flexDirection: 'row',
  }
});
