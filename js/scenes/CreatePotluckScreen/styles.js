import { StyleSheet } from 'react-native'
import {colors, typography, windowWidth} from './../../styles/baseStyles'

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  image:{
    flex: 0,
    height: 100,
    width: windowWidth,
    resizeMode: 'contain',
  },
  header:{
    textAlign: 'center', 
    fontSize: typography.headerFontSize,
    // fontFamily: typography.fontMainBold,       
  },
  button:{
    flex: 1,
    justifyContent: 'center',
    height: 50,
    width: 250,
    backgroundColor: colors.primaryBtnColor
  },
  buttonText:{
    textAlign: 'center',    
  }
});