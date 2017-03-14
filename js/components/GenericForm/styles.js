import { StyleSheet } from 'react-native';
import Main, { typography, colors } from './../../styles/baseStyles'

export const styles = StyleSheet.create({
  container: {
    flex: .75,
    alignItems: 'center'
  },
  login: {
    height: 55,
    width: 320,
    padding: 5,
    flex: 1,
    borderWidth: .25,
    color: Main.loginInput.color,
    fontFamily: Main.loginInput.fontFamily,
    fontSize: Main.loginInput.fontSize,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0
  },
  mainContainer: {
    height: 75,
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
    flex: .30,
    flexDirection: 'row',
  }
});