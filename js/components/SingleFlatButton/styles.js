import { StyleSheet } from 'react-native';
import { windowHeight as height, windowWidth as width, colors } from '../../styles/baseStyles';

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 0,
    justifyContent: 'center',
    alignSelf: 'flex-end',
    width,
    height: height * 0.10,
    backgroundColor: colors.secondaryBtnColor,
    marginTop: 30
  }
});

export default styles;
