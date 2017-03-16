import { StyleSheet } from 'react-native';
import Main, { typography, colors } from './baseStyles';

export const styles = StyleSheet.create({
  container: {
    flex: .75,
    alignItems: 'center',
  },
  expanded: {
    flex: 4,
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
    height: 50,
    width: 320,
    padding: 5,
    flex: 1,
    borderColor: colors.mainBrandColor,
    borderWidth: 1,
    color: Main.loginInput.color,
    fontFamily: Main.loginInput.fontFamily,
    fontSize: typography.baseFontSize,
    borderRadius: 25,
    paddingLeft: 22,
    paddingRight: 22,
  },
  mainContainer: {
    height: 220,
    width: '100%',
    alignItems: 'center'
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
