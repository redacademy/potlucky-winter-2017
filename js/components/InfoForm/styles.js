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
    paddingLeft: 5,
    borderColor: colors.mainBrandColor,
    fontSize: typography.baseFontSize,
    fontFamily: typography.fontMain,
    borderRadius: 3,
    borderWidth: 1,
    flex: 0,
  },
  title: {
    width: '50%',
    fontSize: 16,
    color: colors.mainBrandColor,
    fontFamily: typography.fontMain,
  },
  description: {
    height: 100,
    width: '100%',
    marginBottom: 8,
    padding: 5,
    marginTop: 13,
    borderColor: colors.mainBrandColor,
    fontSize: typography.baseFontSize,
    fontFamily: typography.fontMain,
    borderRadius: 3,
    borderWidth: 1,
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
    marginBottom: 8,
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
    fontFamily: typography.fontMain,
  },
});
