import React from 'react';
import { connect } from 'react-redux';
import NumberOfGuestScreen from './NumberOfGuestScreen';
import {
  Text,
  View,
  Button
} from 'react-native'
import { changeNumberofGuests } from '../../redux/modules/newPotluckActions'

class NumberOfGuestScreenContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      text: 0
    }
  }
  static navigationOptions = {
    title: 'Guest number',
    header: ({ state, setParams, navigate }) => ({
      // Render a button on the right side of the header
      // When pressed switches the screen to edit mode.
      right: (
        <Button
          title={'Done'}
          onPress={() => navigate('FoodScreen')}
        />
      ),
      backTitle: null,
    }),
  };
  onTextChange = (text) => {
    console.log(text)
    this.setState({ text })
  }
  onIncrease = (text) => {
    this.setState({ text: this.state.text + 1 })
  }
  onDecrease = (text) => {
    this.setState({ text: this.state.text - 1 })
  }
  componentDidUpdate() {
    this.props.dispatch(changeNumberofGuests(this.state.text))
  }
  render() {
    const { navigate } = this.props.navigation;
    // The screen's current route is passed in to `props.navigation.state`:
    return (
      <NumberOfGuestScreen
        navigate={navigate}
        text={this.state.text}
        onTextChange={this.onTextChange}
        onIncrease={this.onIncrease}
        onDecrease={this.onDecrease} />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    guests: state.newPotluck.guestNumber
  }
}

export default connect(mapStateToProps)(NumberOfGuestScreenContainer)
