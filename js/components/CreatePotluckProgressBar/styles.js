import { StyleSheet } from 'react-native';

import { colors, windowWidth as width, windowHeight as height, typography } from '../../styles/baseStyles';

const progressBarImageHeight = 59;
const progressBarImageWidth = 702;
const progressBarImageHeightWidthRatio = progressBarImageHeight / progressBarImageWidth;

export default StyleSheet.create({
  container: {
    height: 64,
    alignItems: 'center',
    width,
  },

  header: {
    height: 64,
    width,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 5,
    backgroundColor: colors.mainBrandColor,
  },

  title: {
    fontFamily: typography.fontMain,
    fontSize: 20,
    color: '#FFF',
    alignItems: 'center'
  },

  progressBarImage: {
    marginTop: 15,
    height: width * 0.9 * progressBarImageHeightWidthRatio,
    width: width * 0.9,
  },
});
