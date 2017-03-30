import { StyleSheet } from 'react-native';
import { colors, typography } from '../../styles/baseStyles';

export default StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    height: '100%',
    paddingTop: 10,
  },
  rowContainer: {
    flex: 1,
  },
  guestNameContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 30,
    marginRight: 30,
    paddingBottom: 10,
    paddingTop: 10,
    borderLeftColor: '#FFF',
    borderRightColor: '#FFF',
    borderTopColor: '#FFF',
    borderBottomColor: colors.borderColorGray,
    borderStyle: 'solid',
    borderWidth: 1,
    paddingLeft: 10,
  },
  nameText: {
    fontFamily: typography.fontMain,
    fontSize: 16,
  },
  imageView: {
    paddingRight: 10,
  },
  statusImage: {
    height: 20,
    width: 20,
  }
});
