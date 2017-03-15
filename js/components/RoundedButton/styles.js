import { StyleSheet } from 'react-native';
import { colors, typography, windowWidth as width } from '../../styles/baseStyles'

export default StyleSheet.create({
  buttonShape: {
    width: width * .8,
    borderRadius: 50,
    height: 50,
  },
  buttonView: {
        shadowOffset:{
            width: 0,
            height: 8,
        },
        shadowOpacity: .5,
        shadowRadius: 0
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.mainBrandColor,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
  }

})