import { StyleSheet } from 'react-native';

import { colors, windowWidth as width, windowHeight as height } from '../../styles/baseStyles';

const progressBarImageHeightWidthRatio = 59 / 702;
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
    backgroundColor: colors.mainBrandColor,
  },

  title: {
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
