import React, {Component} from 'react';
import { Text } from 'react-native'

class InfoScreenContainer extends Component {
  static navigationOptions = {
    title: 'Info',
  };
  render() {
    return (
      <Text>Info Screen</Text>
    );
  }
}

export default InfoScreenContainer;