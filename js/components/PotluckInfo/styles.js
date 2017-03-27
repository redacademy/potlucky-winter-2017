import { StyleSheet } from 'react-native';
import { windowHeight as height, windowWidth as width, colors, typography } from '../../styles/baseStyles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: 'white',
    paddingTop: 10,
  },
  scrollViewContainer: {
    width,
  },
  imageContainer: {
    justifyContent: 'center',
    position: 'relative',
    paddingBottom: 10,
  },
  textBanner: {
    position: 'absolute',
    alignSelf: 'center',
    opacity: 0.80
  },
  bannerText: {
    textAlign: 'center',
    width: '100%',
    fontWeight: '600',
    fontFamily: typography.fontMain,
    fontSize: 16,
    paddingTop: 5,
    paddingBottom: 5,
  },
  infoBox: {
    width: width * 0.50,
    alignSelf: 'center',
    alignItems: 'center',
    paddingBottom: 10
  },
  textContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  descriptionBox: {
    alignSelf: 'center',
  },
  descriptionHeader: {
    color: colors.mainBrandColor,
    textAlign: 'center',
    paddingTop: 10,
    lineHeight: 15
  },
  descriptionText: {
    fontFamily: typography.fontMain,
    textAlign: 'center',
    paddingTop: 5,
    lineHeight: 15
  },
  colorText: {
    fontFamily: typography.fontMain,
    color: colors.mainBrandColor
  },
  image: {
    alignSelf: 'center',
    justifyContent: 'center',
  },
  mapImage: {
    alignSelf: 'center',
    justifyContent: 'center'
  },
});

export default styles;
