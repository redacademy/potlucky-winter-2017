import { StyleSheet } from 'react-native';
import Main, { typography, colors } from '../../styles/baseStyles';

export default StyleSheet.create({
  errorMessage: {
    color: Main.loginInput.color,
    fontFamily: Main.loginInput.fontFamily,
    fontSize: typography.smallestFontSize,
    backgroundColor: 'transparent'
  },
  errorContainer: {
    height: 15,
    marginBottom: 5
  }
});
