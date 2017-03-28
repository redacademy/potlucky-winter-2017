import React, { Component, PropTypes } from 'react';
import { Image } from 'react-native';
import { colors, typography } from '../../styles/baseStyles';
import CreatePotluckScreen from './CreatePotluckScreen';
import NavigationArrow from '../../components/NavigationArrow';

class CreatePotluckScreenContainer extends Component {

  static propTypes = {
    navigation: PropTypes.object,
  };

  static navigationOptions = {
    title: 'Create Potlucks',
    tabBar: () => ({
      icon: (
        <Image style={{ height: 30, width: 30 }} source={require('../../../assets/images/potbottomplus.png')} />
      ),
    }),
    header: ({ goBack }) => ({
      style: { backgroundColor: colors.mainBrandColor, paddingLeft: 20, paddingRight: 20 },
      titleStyle: { color: 'white', fontFamily: typography.fontMain },
      left: (
        <NavigationArrow
          backArrow
          onPress={() => goBack(null)}
        />
      )
    }),
  };

  render() {
    const { navigation } = this.props;
    // The screen's current route is passed in to `props.navigation.state`:
    return (
      <CreatePotluckScreen navigation={navigation} />
    );
  }
}

export default CreatePotluckScreenContainer;
