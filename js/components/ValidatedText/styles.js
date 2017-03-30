import { StyleSheet } from 'react-native';
import Main, { typography } from '../../styles/baseStyles';

export default StyleSheet.create({
  errorMessage: {
    color: Main.loginInput.color,
    fontFamily: typography.fontMain,
    fontSize: typography.smallestFontSize,
    backgroundColor: 'transparent'
  },
  errorContainer: {
    width: '100%',
    height: 15,
    marginBottom: 5
  }
});
