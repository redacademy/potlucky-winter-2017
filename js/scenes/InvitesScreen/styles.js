import { StyleSheet } from 'react-native';
import { windowHeight, colors, windowWidth, typography } from './../../styles/baseStyles';

export const styles = StyleSheet.create({
  mainContainer: {
    paddingTop: 100,
    backgroundColor: 'white',
    height: 220,
    flex: 1,
  },
  primaryBtn: {
    height: windowHeight * 0.1,
    flex: 0,
    backgroundColor: colors.invitePrimaryBtn,
    justifyContent: 'center',
    width: windowWidth,
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 18,
    fontFamily: typography.fontMain,
  },
});
