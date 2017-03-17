import { StyleSheet } from 'react-native';

import { colors, windowWidth as width, windowHeight as height } from '../../styles/baseStyles';

<<<<<<< HEAD
const progressBarImageHeight = 59;
const progressBarImageWidth = 702;
const progressBarImageHeightWidthRatio = progressBarImageHeight / progressBarImageWidth;

=======
const progressBarImageHeightWidthRatio = 59 / 702;
>>>>>>> cba1d93e749e7bb1d8439e830a2531a8419a928b
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
