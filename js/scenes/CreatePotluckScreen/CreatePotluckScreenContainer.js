import React from 'react';
import CreatePotluckScreen from './CreatePotluckScreen'

class CreatePotluckScreenContainer extends React.Component {
  static navigationOptions = {
    title: 'Create Potlucks',
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

export default CreatePotluckScreenContainer