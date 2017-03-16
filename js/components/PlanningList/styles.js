import { StyleSheet } from 'react-native';
import { colors, typography } from './../../styles/baseStyles';

export const styles = StyleSheet.create({
  planningListWrap: {
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
  appetizerCourseTitle: {
    fontSize: typography.baseFontSize,
    //fontFamily: typography.fontMainBold,
    color: colors.mainBrandColor,
  },
  mainCourseTitle: {
    fontSize: typography.baseFontSize,
    //fontFamily: typography.fontMainBold,
    color: colors.mainCourseColor,
  },
  saladsCourseTitle: {
    fontSize: typography.baseFontSize,
    //fontFamily: typography.fontMainBold,
    color: colors.saladsColor,
  },
  dessertsCourseTitle: {
    fontSize: typography.baseFontSize,
    //fontFamily: typography.fontMainBold,
    color: colors.dessertsColor,
  },
  chipInTitle: {
    fontSize: typography.baseFontSize,
    //fontFamily: typography.fontMainBold,
    color: colors.chipInColor,
  },
  talentTitle: {
    fontSize: typography.baseFontSize,
    //fontFamily: typography.fontMainBold,
    color: colors.talentColor,
  },
  customTitle: {
    fontSize: typography.baseFontSize,
    //fontFamily: typography.fontMainBold,
    color: colors.customColor,
  }
});