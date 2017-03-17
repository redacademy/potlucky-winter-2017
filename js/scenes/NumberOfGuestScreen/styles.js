import { StyleSheet } from 'react-native'
import { colors, typography, windowWidth, windowHeight } from './../../styles/baseStyles'


export default StyleSheet.create({
  placeholderText: {
    flex: 1,
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
    width: windowWidth,
    height: windowHeight
  },
  textInput: {
    width: 100,
    height: 100,
    fontSize: typography.headerFontSize,
  },
  buttonContainer: {
    flex: 0,
    flexDirection: 'row',
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
  }
});
