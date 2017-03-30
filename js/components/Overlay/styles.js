import { StyleSheet } from 'react-native';
import { typography, windowHeight as height, windowWidth as width } from '../../styles/baseStyles';

const highlightedTextColor = '#FF8E3E';

export default StyleSheet.create({
  contentContainer: {
    height,
    width: width - 100,
    alignItems: 'center',
    paddingTop: 150,
  },
  modalView: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    height,
    width,
    paddingTop: 25,
    alignItems: 'center'
  },
  closeButtonView: {
    width,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  closeButtonImage: {
    height: 20,
    width: 20,
    marginRight: 15
  },
  highlightedText: {
    fontFamily: typography.fontMain,
    color: highlightedTextColor,
  },
  baseTextStyling: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 20,
  }
})
;