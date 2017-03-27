import { StyleSheet } from 'react-native';
import { colors, typography } from './../../styles/baseStyles';

export const styles = StyleSheet.create({
  planningListWrap: {
    paddingTop: 63,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  courseButton: {
    alignItems: 'center',
    margin: 7,
    width: 100,
    height: 60,
  },
  iconWrap: {
    alignItems: 'center',
    width: '100%',
    position: 'relative',
    paddingTop: 2,
  },
  courseQuantityBG: {
    position: 'absolute',
    right: 27,
    top: 0,
    width: 15,
    height: 15,
    backgroundColor: colors.courseIndicatorBG,
    borderRadius: 10,
    overflow: 'hidden',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  courseIcon: {
    height: 48,
    width: 48,
    resizeMode: 'contain',
  },
  courseTitle: {
    fontSize: typography.baseFontSize,
    fontFamily: typography.fontMain,
    fontWeight: 'bold',
  },
  mainCourseTitle: {
    fontSize: typography.baseFontSize,
    fontFamily: typography.fontMain,
    fontWeight: 'bold',
    color: colors.mainCourseColor,
  },
  saladsCourseTitle: {
    fontWeight: 'bold',
    fontSize: typography.baseFontSize,
    fontFamily: typography.fontMain,
    color: colors.saladsColor,
  },
  dessertsCourseTitle: {
    fontSize: typography.baseFontSize,
    fontWeight: 'bold',
    fontFamily: typography.fontMain,
    color: colors.dessertsColor,
  },
  chipInTitle: {
    fontSize: typography.baseFontSize,
    fontWeight: 'bold',
    fontFamily: typography.fontMain,
    color: colors.chipInColor,
  },
  talentTitle: {
    fontSize: typography.baseFontSize,
    fontWeight: 'bold',
    fontFamily: typography.fontMain,
    color: colors.talentColor,
  },
  customTitle: {
    fontSize: typography.baseFontSize,
    fontWeight: 'bold',
    fontFamily: typography.fontMain,
    color: colors.customColor,
  }
});
