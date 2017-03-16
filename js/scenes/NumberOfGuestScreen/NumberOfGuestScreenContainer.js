import React from 'react';
import { connect } from 'react-redux';
import NumberOfGuestScreen from './NumberOfGuestScreen';
import {
  Text,
  View,
  Button
} from 'react-native';
import { changeNumberofGuests } from '../../redux/modules/newPotluckActions';

class NumberOfGuestScreenContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }
  static navigationOptions = {
    title: 'Guest number',
    header: ({ navigate }) => ({
      // Render a button on the right side of the header
      // When pressed switches the screen to edit mode.
      right: (
        <Button
          title={'Done'}
          onPress={() => navigate('FoodPlanningScreen')}
        />
      ),
      backTitle: null,
    }),
  };
  onTextChange = (text) => {
    this.setState({ count: text });
  }
  increase = () => {
    this.setState({ count: this.state.count + 1 });
  }
  decrease = () => {
    this.setState({ count: this.state.count - 1 });
  }
  componentDidUpdate() {
    this.props.dispatch(changeNumberofGuests(this.state.text));
  }
  render() {
    const { navigate } = this.props.navigation;
    // The screen's current route is passed in to `props.navigation.state`:
    return (
      <NumberOfGuestScreen
        navigate={navigate}
        text={this.state.text}
        onTextChange={this.onTextChange}
        increase={this.increase}
        decrease={this.decrease}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
    guests: state.newPotluck.guestNumber
  });

export default connect(mapStateToProps)(NumberOfGuestScreenContainer);
