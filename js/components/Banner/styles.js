import { StyleSheet } from 'react-native';
import { windowWidth as width } from './../../styles/baseStyles';

export default StyleSheet.create({
  background: {
    height: 265,
    width,
    resizeMode: 'repeat',
    justifyContent: 'center'
  },
  logo: {
    height: 165,
    resizeMode: 'contain',
  }
});
