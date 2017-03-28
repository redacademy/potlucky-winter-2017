import {
  StyleSheet
} from 'react-native';
import Main, {
  colors,
  typography,
  windowWidth as width
} from '../../styles/baseStyles';

export default StyleSheet.create({
  container: {
    marginBottom: 23,
  },
  title: {
    width: '100%',
    fontFamily: typography.fontMain,
    fontSize: 16,
    color: colors.mainBrandColor,
  },
});
