import { StyleSheet } from 'react-native';
// import { windowHeight } from '../../styles/baseStyles';
import { colors } from '../../styles/baseStyles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  scrollView: {
    // backgroundColor: 'yellow',
  },
  pageControl: {
    height: 60,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 180,
    backgroundColor: colors.secondaryBrandColor,
  }
});
