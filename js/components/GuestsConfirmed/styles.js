import { StyleSheet } from 'react-native';
import { typography } from './../../styles/baseStyles';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  confirmedGuestsText: {
    fontFamily: typography.fontMain,
    fontSize: typography.headerFontSize * 2.5,
    marginBottom: -5
  },
  expectedGuestsContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',

  },
  expectedGuestsText: {
    fontFamily: typography.fontMain,
    fontSize: 12,
    color: '#555',
  },
  endText: {
    marginLeft: 10
  }

});

