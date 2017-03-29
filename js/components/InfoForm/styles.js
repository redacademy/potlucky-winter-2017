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
    fontFamily: typography.fontMain,
    borderColor: colors.mainBrandColor,
    fontSize: typography.baseFontSize,
    borderRadius: 3,
    borderWidth: 1,
    flex: 0,
  },
  title: {
    width: '50%',
    fontFamily: typography.fontMain,
    fontSize: 16,
    color: colors.mainBrandColor,
  },
  cameraImage: {
    width: 40,
    height: 40
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  },
  noImage: {
    height: 200,
    width: '100%',
    borderColor: colors.mainBrandColor,
    fontSize: typography.baseFontSize,
    borderRadius: 3,
    borderWidth: 1,
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  description: {
    height: 100,
    width: '100%',
    marginBottom: 8,
    padding: 5,
    marginTop: 13,
    borderColor: colors.mainBrandColor,
    fontFamily: typography.fontMain,
    fontSize: typography.baseFontSize,
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
  formContainer: {
    flex: 1,
    alignItems: 'center'
  },
});
