import { StyleSheet } from 'react-native';
import { colors, typography, windowWidth as width, windowHeight as height } from './../../styles/baseStyles';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white'
  },
  imageContainer: {
    flex: 0,
    justifyContent: 'center',
    height: height * 0.30,
  },
  image: {
    alignSelf: 'center',
    height: 145,
    width: 145
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  formsBox: {
    alignSelf: 'center',
    width: width * 0.80,
    paddingBottom: 20,
    height: height * 0.50
  },
  formElementcontainer: {
    flex: 1,
    position: 'relative',
    justifyContent: 'center'
  },
  formElement: {
    height: 30,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: colors.borderColorGray,
    borderRadius: 3,
    paddingLeft: 10,
    paddingTop: 5,
    textAlign: 'left',
    color: colors.mainBrandColor
  },
});
