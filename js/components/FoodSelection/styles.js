import { StyleSheet } from 'react-native';
import { typography } from './../../styles/baseStyles';

const IMAGE_HEIGHT = 48;
const IMAGE_WIDTH = IMAGE_HEIGHT;
const MARGINS = 10;
const LEFT_BORDER_WIDTH = 3;

export default StyleSheet.create({
  container: {
    position: 'relative',
    alignItems: 'flex-end',

    width: '100%',
  },
  image: {
    position: 'absolute',
    height: IMAGE_HEIGHT,
    width: IMAGE_WIDTH,
    left: MARGINS,
  },
  allTextInputContainer: {
    marginTop: IMAGE_HEIGHT,
    paddingLeft: (IMAGE_WIDTH / 2) + MARGINS,
    borderLeftWidth: 3,
    marginRight: MARGINS,
    marginLeft: MARGINS + (IMAGE_WIDTH / 2) - (Math.trunc(LEFT_BORDER_WIDTH / 2)),
  },
  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    width: '100%',
    borderWidth: 1,
    borderRadius: 5,
  },
  inputTextContainer: {
    height: '100%',
    width: '60%',
    borderRightWidth: 1,
    borderRadius: 5,
  },
  inputText: {
    height: '100%',
    width: '100%',
    textAlign: 'center',
    fontSize: typography.baseFontSize,
    fontWeight: 'bold',
    color: '#fff',
  },
  usernameTextContainer: {
    height: '100%',
    width: '40%',
    alignItems: 'center',
    justifyContent: 'center',

  },
  usernameText: {
    fontSize: typography.baseFontSize,
  }

});

