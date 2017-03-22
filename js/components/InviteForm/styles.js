import { StyleSheet } from 'react-native';
import Main, { colors } from './../../styles/baseStyles';

export const styles = StyleSheet.create({
  mainContainer: {
    paddingTop: 10,
    backgroundColor: 'white',
    height: 220,
    flex: 1,
  },
  input: {
    height: 40,
    width: 320,
    padding: 10,
    flex: 2,
    borderWidth: 0.125,
    color: Main.loginInput.color,
    fontFamily: Main.loginInput.fontFamily,
    fontSize: Main.loginInput.fontSize,
    borderRadius: 3,
  },
  buttonContainer: {
    flex: 0,
    flexDirection: 'row',
  },
  button: {
    height: 50,
    flex: 1,
    backgroundColor: colors.secondaryBtnColor,
    justifyContent: 'center'
  },
  buttonText: {
    textAlign: 'center',
  }
});
