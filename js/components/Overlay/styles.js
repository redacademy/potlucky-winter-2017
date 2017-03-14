import { StyleSheet, Dimensions } from 'react-native'
import { typography } from '../../styles/baseStyles'

export default StyleSheet.create({
  contentContainer: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width - 100,
    alignItems: 'center',
    paddingTop: 150,
  },
  modalView: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    paddingTop: 25,
    alignItems: 'center'
  },
  closeButtonView: {
    width: Dimensions.get('window').width,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  closeButtonImage: {
    height: 20,
    width: 20,
    marginRight: 15
  },
  whiteText: {
    color: 'white',
    fontSize: 20,
    fontFamily: typography.fontMain,
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 20,
  },
  orangeText: {
    color: 'orange',
    fontSize: 25,
    fontFamily: typography.fontMain,
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 20,
  }
})