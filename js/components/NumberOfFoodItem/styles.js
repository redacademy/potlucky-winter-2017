import { StyleSheet } from 'react-native';
import { typography } from './../../styles/baseStyles';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '20%',
  },
  countContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 26,
    width: 26,
    borderRadius: 13,
    backgroundColor: '#E1E1E1',
    marginBottom: 5,
    marginTop: 10,
  },
  countText: {
    fontFamily: typography.fontMain,
  },
  foodItemNameText: {
    fontFamily: typography.fontMain,
    fontWeight: 'bold',
  }
});

