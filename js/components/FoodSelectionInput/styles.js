import { StyleSheet } from 'react-native';
import { typography } from './../../styles/baseStyles';

export default StyleSheet.create({
  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    width: '100%',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
  },
  inputTextContainer: {
    height: '100%',
    width: '60%',
    borderRightWidth: 1,
    borderRadius: 5,
  },
  inputText: {
    height: '100%',
    width: '100%',
    textAlign: 'center',
    fontSize: typography.baseFontSize,
    fontWeight: 'bold',
    color: '#fff',
  },
  usernameTextContainer: {
    height: '100%',
    width: '40%',
    alignItems: 'center',
    justifyContent: 'center',

  },
  usernameText: {
    fontSize: typography.baseFontSize,
  }

});

