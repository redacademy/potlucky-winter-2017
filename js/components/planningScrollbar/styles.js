import { StyleSheet } from 'react-native';
import { windowHeight } from '../../styles/baseStyles';
import { colors, typography } from './../../styles/baseStyles';

export const styles = StyleSheet.create({
  courseSelectionScrollBar: {
    maxHeight: 75,
    backgroundColor: colors.mainBrandColor,
  },
  scrollBarCenter: {
    height: '100%',
    flexDirection: 'row',
  },
  courseButton: {
    alignItems: 'center',
    margin: 10,
    width: 55,
    height: 60,
    position: 'relative',
  },
  courseTitle: {
    fontSize: typography.smallestFontSize,
    color: 'white',
  },
  iconWrap: {
    alignItems: 'center',
    width: '100%',
  },
  courseIcon: {
    height: 48,
    width: 48,
    resizeMode: 'contain',
    position: 'relative'
  },
  plusIcon: {
    position: 'absolute',
    right: 3,
    top: 3,
    width: 10,
    height: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    overflow: 'hidden',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
});