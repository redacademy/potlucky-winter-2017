import { StyleSheet } from 'react-native'
import { colors, typography } from '../../styles/baseStyles'

const arrowHeight = 24;
const arrowWidth = 16;
const arrowHeightWidthRatio = arrowHeight / arrowWidth;

const potHeight = 75;
const potWidth = 100;
const potHeightWidthRatio = potHeight / potWidth;

export default StyleSheet.create({
  myPotlucksListItemContainer: {
    flexDirection: 'row',
    paddingRight: 15,
    paddingLeft: 15,
    paddingTop: 10,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#696969',
    backgroundColor: '#FFF'
  },
  potImageContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  potImage: {
    marginRight: 15,
    height: 100 * potHeightWidthRatio,
    width: 100 * potHeightWidthRatio
  },
  title: {
    fontSize: 18,
    lineHeight: 20,
  },
  description: {
    fontSize: typography.baseFontSize,
    color: '#696969',
    lineHeight: 20,
    height: 40
  },
  statusText: {
    fontSize: typography.headerFontSize * 0.75,
    fontWeight: 'bold',
  },
  statusHost: {
    color: colors.mainBrandColor,
  },
  statusInvited: {
    color: colors.mainCourseColor,
  },
  recieved: {
    fontSize: typography.baseFontSize,
    color: '#696969',
    lineHeight: 20
  },
  contentContainer: {
    flex: 1,
    width: 120,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'space-between'
  },
  statusRecievedContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between'
  },
  forwardArrowContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  forwardArrow: {
    height: 12 * arrowHeightWidthRatio,
    width: 12
  }
})
