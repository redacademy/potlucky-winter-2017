import { StyleSheet } from 'react-native';

import { windowWidth as width, windowHeight as height } from '../../styles/baseStyles';

const progressBarImageHeightWidthRatio = 59 / 702;
export default StyleSheet.create({
  container: {
    alignItems: 'center',
    width,
    paddingTop: 80,
    height: 150
  },
  progressBarImage: {
    height: width * 0.9 * progressBarImageHeightWidthRatio,
    width: width * 0.9,
    marginTop: 5
  },
  title: {
    fontSize: 20,
    alignItems: 'center'
  }
});
