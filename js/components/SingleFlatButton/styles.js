import { StyleSheet } from 'react-native';
import { windowHeight as height, windowWidth as width, colors } from '../../styles/baseStyles';

const styles = StyleSheet.create({
  full: {
    width,
  },
  half: {
    width: width / 2,
  },
  buttonContainer: {
    flex: 0,
    justifyContent: 'center',
    alignSelf: 'flex-end',
    height: height * 0.10,
    backgroundColor: colors.secondaryBtnColor,
    marginTop: 30
  }
});

export default styles;
