import { StyleSheet } from 'react-native';
import { typography } from './../../styles/baseStyles';

export default StyleSheet.create({
  container: {
    height: '100%',
  },
  buttonContainer: {
    flex: 1,
    flexBasis: '50%',
    flexDirection: 'row',
    width: '100%',
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontFamily: typography.fontMain,
  }
});
