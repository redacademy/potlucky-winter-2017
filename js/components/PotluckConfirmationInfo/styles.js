import { StyleSheet } from 'react-native';
import { windowHeight as height, windowWidth as width, colors, typography } from '../../styles/baseStyles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 30,
    backgroundColor: 'white',
  },
  inputContainer: {
    flex: 1,
    width: width * 0.90,
    alignSelf: 'center',
    borderColor: colors.borderColorGray,
    backgroundColor: 'white',
    borderWidth: 1,
    overflow: 'hidden',
  },
  scrollViewContainer: {
    marginBottom: 20
  },
  imageContainer: {
    width: width * 0.85,
    height: height * 0.30,
    alignSelf: 'center',
    justifyContent: 'center',
    position: 'relative'
  },
  textBanner: {
    position: 'absolute',
    alignSelf: 'center',
    width: width * 0.85,
    opacity: 0.80
  },
  bannerText: {
    textAlign: 'center',
    paddingTop: 5,
    paddingBottom: 5,
  },
  infoContainer: {
    width: width * 0.75,
    height: height * 0.15,
    alignSelf: 'center',
  },
  infoBox: {
    width: width * 0.50,
    height: height * 0.12,
    alignSelf: 'center',
    paddingBottom: 10
  },
  textContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  descriptionBox: {
    width: width * 0.70,
    height: height * 0.12,
    alignSelf: 'center',
  },
  descriptionHeader: {
    color: colors.mainBrandColor,
    textAlign: 'center',
    paddingTop: 10,
    lineHeight: 15
  },
  descriptionText: {
    textAlign: 'center',
    paddingTop: 5,
    lineHeight: 15
  },
  colorText: {
    color: colors.mainBrandColor
  },
  image: {
    width: width * 0.80,
    height: height * 0.25,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  mapImage: {
    width: width * 0.80,
    height: height * 0.15,
    alignSelf: 'center',
    justifyContent: 'center'
  },
});

export default styles;
