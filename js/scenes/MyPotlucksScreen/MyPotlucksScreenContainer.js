import React from 'react';
import MyPotlucksScreen from './MyPotlucksScreen'

class MyPotlucksScreenContainer extends React.Component {
  static navigationOptions = {
    title: 'MyPotlucks',
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

export default MyPotlucksScreenContainer