import React, { Component, PropTypes } from 'react';
import { View, TextInput, Text } from 'react-native';
import { connect } from 'react-redux';

import api from '../../services/api/pot-lucks';
import { updatePotluckFoodMessage, fetchPotluckFood } from '../../redux/modules/potluckFoodActions';

import styles from './styles';

class FoodSelectionInput extends Component {

  constructor() {
    super();

    this.state = {
      foodInput: '',
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.message !== nextProps.message) {
      this.props.dispatch(fetchPotluckFood(this.props.potluckId));
    }
  }

  render() {
    const { color, foodItem, displayUsername, displayDishName, potluckId, dispatch, myUsername, uId } = this.props;
    return (
      <View style={[styles.textInputContainer]}>
        <View style={styles.inputTextContainer}>
          <TextInput
            onSubmitEditing={
              () => {
                api.submitFoodItem(
                  {
                    displayName: `${myUsername.firstName} ${myUsername.lastName}`,
                    dish: this.state.foodInput,
                  },
                  potluckId,
                  foodItem.name.toUpperCase(),
                  uId,
                ).then(() => {
                  dispatch(updatePotluckFoodMessage(`${this.state.foodInput} added to ${foodItem.name}`));
                })
                  ;
              }
            }
            onChangeText={foodInput => this.setState({ foodInput })}
            editable={!displayUsername || (displayUsername === `${myUsername.firstName} ${myUsername.lastName}`)}
            defaultValue={displayDishName}
            placeholder="?"
            placeholderTextColor="#FFF"
            returnKeyType="done"
            autoCorrect={false}
            style={[styles.inputText, { backgroundColor: color }]}
          />
        </View>
        <View style={styles.usernameTextContainer}>
          <Text style={[styles.usernameText, { color }]}>{displayUsername}</Text>
        </View>
      </View>
    );
  }
}

FoodSelectionInput.propTypes = {
  color: PropTypes.string.isRequired,
  foodItem: PropTypes.object.isRequired,
  displayUsername: PropTypes.string.isRequired,
  displayDishName: PropTypes.string.isRequired,
  potluckId: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  myUsername: PropTypes.object.isRequired,
  uId: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  myUsername: state.userSignIn.userName,
  uId: state.userSignIn.uId,
  potluckId: state.currentPotluck.id,
  message: state.potluckFood.message,
});

export default connect(mapStateToProps)(FoodSelectionInput);
