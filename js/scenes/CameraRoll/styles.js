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
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  imageGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start'
  },
  imageContainer: {
    width: '25%',
    height: 100,
  },
  image: {
    width: '100%',
    height: 100,
    padding: 5,
  },
});
