import React from 'react';
import { Image } from 'react-native';
import CreatePotluckScreen from './CreatePotluckScreen';

class CreatePotluckScreenContainer extends React.Component {
  static navigationOptions = {
    title: 'Create Potlucks',
    tabBar: () => ({
      icon: (
        <Image style={{ height: 30, width: 30 }} source={require('../../../assets/images/potbottomplus.png')} />
      ),
    })
  };

  constructor() {
    super()
  }

  render() {
    const { navigate } = this.props.navigation;
    // The screen's current route is passed in to `props.navigation.state`:
    return (
      <CreatePotluckScreen navigate={navigate} />
    );
  }
}

export default CreatePotluckScreenContainer;
