import { StyleSheet } from 'react-native';
import { colors, typography, windowWidth, windowHeight } from './../../styles/baseStyles';


export default StyleSheet.create({
  placeholderText: {
    flex: 1,
    fontFamily: typography.fontMain,
    marginTop: 100,
  },
  input: {
    justifyContent: 'center',
    height: 50,
    width: 250,
    backgroundColor: colors.primaryBtnColor
  },
  container: {
    flex: 0,
    paddingTop: 100,
    width: windowWidth,
    height: windowHeight - 20,
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  inputAndImagesContainer: {
    alignItems: 'center',
    width: '100%',
    height: 320,
    justifyContent: 'space-between',
  },
  imageContainer: {
    width: 280,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  textInput: {
    fontSize: typography.headerFontSize * 2,
    fontFamily: typography.fontMain,
    borderWidth: 1,
    borderColor: 'black',
    width: 90,
    height: 70,
    shadowOffset: { width: 1, height: 3 },
    shadowColor: 'black',
    shadowOpacity: 0.17,
    borderRadius: 5,
    textAlign: 'center'
  },
  buttonContainer: {
    flex: 0,
    flexDirection: 'row',
<<<<<<< HEAD
    flexWrap: 'wrap'
=======
    flexWrap: 'wrap',
>>>>>>> Added Button to Guest Number Screen.
  },
  button: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    width: windowWidth / 2,
    height: 50,
  },
  active: {
    backgroundColor: colors.primaryBtnColor
  },
  inactive: {
    backgroundColor: colors.secondaryBtnColor
  },
  buttonText: {
    fontFamily: typography.fontMain,
    fontSize: 30,
    color: '#FFF',
  },
  primaryBtn: {
    height: windowHeight * 0.1,
    flex: 0,
    backgroundColor: colors.invitePrimaryBtn,
    justifyContent: 'center',
    width: windowWidth,
  },
  buttonTextNext: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 18,
    fontFamily: typography.fontMain,
  },
});
