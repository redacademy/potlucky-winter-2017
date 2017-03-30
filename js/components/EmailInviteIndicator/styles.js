import { StyleSheet } from 'react-native';
import Main, { typography, colors } from './../../styles/baseStyles';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  invitesQuantity: {
    fontFamily: typography.fontMain,
    fontSize: typography.headerFontSize * 2.5,
    marginBottom: -5
  },
  invitesText: {
    fontFamily: typography.fontMain,
    fontSize: 12,
    color: '#555',
  },
});

