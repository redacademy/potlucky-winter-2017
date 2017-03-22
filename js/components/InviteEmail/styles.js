import { StyleSheet } from 'react-native';
import Main, { typography } from './../../styles/baseStyles';

export const styles = StyleSheet.create({
  container: {
    flex: 0.75,
    alignItems: 'center'
  },
  inputContainer: {
    flex: 2,
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
    height: 15,
    flex: 0.30,
    flexDirection: 'row',
  }
});

