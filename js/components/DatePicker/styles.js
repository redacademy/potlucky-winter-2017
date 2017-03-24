import {
  StyleSheet
} from 'react-native';
import {
  colors,
  typography,
  windowWidth as width
} from '../../styles/baseStyles'

export default StyleSheet.create({
  login: {
    height: 24,
    width: 158,
    padding: 5,
    borderColor: colors.mainBrandColor,
    fontSize: typography.baseFontSize,
    borderRadius: 3,
    borderWidth: 1,
    paddingLeft: 10,
    paddingRight: 10,
  },
  title: {
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
  datePickerButton: {
    height: 24,
    width: '50%',
    padding: 5,
    borderColor: colors.mainBrandColor,
    fontSize: typography.baseFontSize,
    borderRadius: 3,
    borderWidth: 1,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'center',
  },
  mainContainer: {
    paddingTop: 100,
    width: 300,
  },
  container: {
    height: 24,
    width: '100%',
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
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
  errorMessage: {
    fontSize: typography.smallestFontSize,
    backgroundColor: 'transparent'
  },
  errorContainer: {
    height: 50,
    flexDirection: 'row',
  },
  title: {
    fontSize: 16,
    color: colors.mainBrandColor
  }
})