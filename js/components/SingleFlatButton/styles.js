import { StyleSheet } from 'react-native';
import { windowHeight as height } from '../../styles/baseStyles';

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'flex-end',
    height: height * 0.10,
    width: '100%',
    backgroundColor: 'red',
  },
});

export default styles;
