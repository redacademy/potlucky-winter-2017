import React, { Component, PropTypes } from 'react';
import Gandalf from 'gandalf-validator';
import { TextInput, View, Text, Button, DatePickerIOS, TouchableHighlight } from 'react-native';
import { styles } from './../../styles/formStyles';

class Form extends Gandalf {
  constructor() {
    const fields = [
      {
        name: 'potluckName',
        component: TextInput,
        validators: ['required'],
        errorPropName: 'error',
        onChangeHandler: 'onChangeText',
        props: {
          placeholder: 'Potluck Name',
          style: styles.login
        },
        getValueInOnChange: text => text,
        debounce: 500,
      }, {
        name: 'theme',
        component: TextInput,
        validators: ['required'],
        errorPropName: 'error',
        onChangeHandler: 'onChangeText',
        props: {
          placeholder: 'theme',
          style: styles.login
        },
        getValueInOnChange: text => text,
        debounce: 500,
      }, {
        name: 'guestNumber',
        component: TextInput,
        validators: ['numeric'],
        errorPropName: 'error',
        onChangeHandler: 'onChangeText',
        props: {
          placeholder: 'Number of Guests',
          style: styles.login
        },
        getValueInOnChange: text => text,
        debounce: 500,
      },
    ];
    super(fields);

    this.state.date = new Date();
    this.state.timeZoneOffsetInHours = (-1) * (new Date()).getTimezoneOffset() / 60;
    this.state.showDate = false;
    this.state.showArriveTime = false;
    this.state.showServingTime = false;
    this.state.arriveTime = new Date();
    this.state.servingTime = new Date();
  }

  onDateChange = (date) => {
    this.setState({ date });
  };

  onArriveTimeChange = (time) => {
    this.setState({
      arriveTime: time
    });
  }

  onServingTimeChange = (time) => {
    this.setState({
      servingTime: time
    });
  }

  handleSubmit() {
    let data = this.getCleanFormData();
    if (!data) return;
    data = {
      ...data,
      date: this.state.date,
      arriveTime: this.state.arriveTime,
      servingTime: this.state.servingTime
    };
    // Submit to REDUX
    console.log('goin\' to REDUX', data);
  }

  render() {
    const fields = this.state.fields;
    return (
      <View style={styles.mainContainer}>

        <View style={styles.container}>
          <View style={styles.container}>
            {fields.potluckName.element}
          </View>
          <View style={styles.errorContainer}>
            <Text style={styles.errorMessage}>
              {fields.potluckName.errorMessage && fields.potluckName.errorMessage}
            </Text>
          </View>
        </View>
        <View style={this.state.showDate ? styles.expanded : styles.container}>
          <Button
            style={styles.container}
            title={'Date'}
            onPress={() => { this.setState({ showDate: !this.state.showDate }); }}
          />
          {this.state.showDate &&
            <DatePickerIOS
              style={{ height: 250, width: 250, }}
              date={this.state.date}
              mode="date"
              timeZoneOffsetInMinutes={this.state.timeZoneOffsetInHours * 60}
              onDateChange={this.onDateChange}
            />
          }
        </View>
        <View style={this.state.showArriveTime ? styles.expanded : styles.container} >
          <Button
            style={styles.container}
            title={'Arriving Time'}
            onPress={() => { this.setState({ showArriveTime: !this.state.showArriveTime }); }}
          />
          {this.state.showArriveTime &&
            <DatePickerIOS
              style={{ height: 250, width: 250, }}
              date={this.state.arriveTime}
              mode="time"
              timeZoneOffsetInMinutes={this.state.timeZoneOffsetInHours * 60}
              onDateChange={this.onArriveTimeChange}
            />
          }
        </View>
        <View style={this.state.showServingTime ? styles.expanded : styles.container} >
          <Button
            style={styles.container}
            title={'Serving Time'}
            onPress={() => { this.setState({ showServingTime: !this.state.showServingTime }); }}
          />
          {this.state.showServingTime &&
            <DatePickerIOS
              style={{ height: 250, width: 250, }}
              date={this.state.servingTime}
              mode="time"
              timeZoneOffsetInMinutes={this.state.timeZoneOffsetInHours * 60}
              onDateChange={this.onServingTimeChange}
            />
          }
        </View>
        <View style={styles.container} >
          <View style={styles.container} >
            {fields.theme.element}
          </View>
          <View style={styles.errorContainer} >
            <Text style={styles.errorMessage}>
              {fields.theme.errorMessage && fields.theme.errorMessage}
            </Text>
          </View>
        </View>
        <View style={styles.container} >
          <View style={styles.container} >
            {fields.guestNumber.element}
          </View>
          <View style={styles.errorContainer} >
            <Text style={styles.errorMessage}>
              {fields.guestNumber.errorMessage && fields.guestNumber.errorMessage}
            </Text>
          </View>
        </View>
        <TouchableHighlight style={styles.button} onPress={() => this.handleSubmit()}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableHighlight>
      </View >
    );
  }
}
export default Form;
