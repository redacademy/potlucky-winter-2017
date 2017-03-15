import React from 'react';
import { Image } from 'react-native';
import MyPotlucksScreen from './MyPotlucksScreen';

class MyPotlucksScreenContainer extends React.Component {
  static navigationOptions = {
    title: 'My Potlucks',

    tabBar: () => ({
      icon: (
        <Image style={{ height: 30, width: 30 }} source={require('../../../assets/images/potbottom.png')} />
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
      <MyPotlucksScreen navigate={navigate} />
    );
  }
}

export default MyPotlucksScreenContainer;
