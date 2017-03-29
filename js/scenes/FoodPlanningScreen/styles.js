import { StyleSheet } from 'react-native';
import { windowHeight } from '../../styles/baseStyles';
import { colors, typography } from './../../styles/baseStyles';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    height: '100%',
    backgroundColor: 'white'
  },
  foodPlanningWrap: {
    paddingTop: 25,
    paddingLeft: 7,
    paddingRight: 7,
    paddingBottom: 7,
    justifyContent: 'space-between',
    flex: 1,
  },
  primaryBtn: {
    height: windowHeight * 0.10,
    flex: 0,
<<<<<<< HEAD
    backgroundColor: colors.invitePrimaryBtn,
    justifyContent: 'center',
=======
    backgroundColor: colors.inviteSecondaryBtn,
    justifyContent: 'center',
    borderTopColor: 'black',
    borderTopWidth: 1,
>>>>>>> Added Button to Guest Number Screen.
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 18,
    fontFamily: typography.fontMain,
  },
});
