import React from 'react';
import { connect } from 'react-redux';
import NumberOfGuestScreen from './NumberOfGuestScreen';
import {
  Text,
  View,
  Button
} from 'react-native';
import { changeNumberofGuests } from '../../redux/modules/newPotluckActions';

import CreatePotluckProgressBar from '../../components/CreatePotluckProgressBar';

import NavigationArrow from '../../components/NavigationArrow';

class NumberOfGuestScreenContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }
  static navigationOptions = {
    header: ({ navigate, dispatch, goBack }) => ({
      style: { height: 0 ,margin: 0, padding: 0, },
      title: <CreatePotluckProgressBar title='Number of Guests' progressNumber={1} />,
      right: (
        <NavigationArrow
          onPress={() => navigate('FoodPlanningScreen')}
        />
      ),
      left: (
        <NavigationArrow
          backArrow
          onPress={() => goBack(null)}
        />
      ),
    }),
  };

  onTextChange = (text) => {
    if (text === '') {
      this.setState({ count: 0 });
      return;
    }
    const reg = /(^\d+$)/;
    if (reg.test(text)) {
      if (text.indexOf(0) !== 0) {
        this.setState({ count: text });
      } else {
        this.setState({ count: text.substring(1) });
      }
    }
  }

  increase = () => this.setState({ count: this.state.count + 1 });

  decrease = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  }
  componentDidUpdate() {
    this.props.dispatch(changeNumberofGuests(this.state.count));
  }
  render() {
    const { navigate } = this.props.navigation;
    // The screen's current route is passed in to `props.navigation.state`:
    return (
      <NumberOfGuestScreen
        navigate={navigate}
        count={this.state.count}
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
