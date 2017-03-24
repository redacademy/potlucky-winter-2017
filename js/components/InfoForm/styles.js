import {
  StyleSheet
} from 'react-native';
import Main, {
  colors,
  typography,
  windowWidth as width
} from '../../styles/baseStyles';

export default StyleSheet.create({
  login: {
    height: 24,
    width: '50%',
    padding: 5,
    borderColor: colors.mainBrandColor,
    fontSize: typography.baseFontSize,
    borderRadius: 3,
    borderWidth: 1,
    paddingLeft: 10,
    paddingRight: 10,
    flex: 0,
  },
  title: {
    width: '50%',
    fontSize: 16,
    color: colors.mainBrandColor
  },
  description: {
    height: 100,
    width: '100%',
    padding: 5,
    marginTop: 13,
    borderColor: colors.mainBrandColor,
    fontSize: typography.baseFontSize,
    borderRadius: 3,
    borderWidth: 1,
    paddingLeft: 10,
    paddingRight: 10,
  },
  mainContainer: {
    paddingTop: 100,
    width: 300,
  },
  inputContainerStyle: {
    height: 24,
    width: '100%',
    paddingBottom: 8,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  container: {
    height: 40,
    width: '100%',
    paddingBottom: 8,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  dateContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  expanded: {
    height: 300,
  },
  datePicker: {
    width: '100%',
    height: 250,
    alignSelf: 'flex-end',
  },
});
