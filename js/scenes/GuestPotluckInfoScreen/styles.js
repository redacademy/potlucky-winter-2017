import { StyleSheet } from 'react-native';
import { colors, typography } from './../../styles/baseStyles';

export default StyleSheet.create({
  container: {
    height: '100%',
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
