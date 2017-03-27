import { StyleSheet } from 'react-native';
import Main, { colors, typography } from './../../styles/baseStyles';

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
  primaryBtn: {
    height: 50,
    flex: 1,
    backgroundColor: colors.invitePrimaryBtn,
    justifyContent: 'center'
  },
  secondaryBtn: {
    height: 50,
    flex: 1,
    backgroundColor: colors.inviteSecondaryBtn,
    justifyContent: 'center'
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontFamily: typography.fontMain,
  }
});
