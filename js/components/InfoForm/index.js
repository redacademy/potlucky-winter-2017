import React, { Component, PropTypes } from 'react';
import Gandalf from 'gandalf-validator';
import { TextInput, View, Text, Button, TouchableOpacity, DatePickerIOS, TouchableHighlight } from 'react-native';
import styles from './styles';
import ValidatedText from './../ValidatedText';

class Form extends Gandalf {
  constructor() {
    const fields = [
      {
        name: 'potluckName',
        component: ValidatedText,
        validators: ['required'],
        errorPropName: 'error',
        onChangeHandler: 'onChangeText',
        props: {
          title: 'Potluck Name',
          inputStyle: styles.login,
          containerStyle: styles.container,
          titleStyle: styles.title,
        },
        getValueInOnChange: text => text,
        debounce: 500,
      }, {
        name: 'theme',
        component: ValidatedText,
        validators: ['required'],
        errorPropName: 'error',
        onChangeHandler: 'onChangeText',
        props: {
          title: 'Theme',
          inputStyle: styles.login,
          containerStyle: styles.container,
          titleStyle: styles.title,
        },
        getValueInOnChange: text => text,
        debounce: 500,
      }, {
        name: 'guestNumber',
        component: ValidatedText,
        validators: ['numeric'],
        errorPropName: 'error',
        onChangeHandler: 'onChangeText',
        props: {
          title: 'Guest Number',
          inputStyle: styles.login,
          containerStyle: styles.container,
          titleStyle: styles.title,
        },
        getValueInOnChange: text => text,
        debounce: 500,
      }, {
        name: 'location',
        component: ValidatedText,
        validators: ['required'],
        errorPropName: 'error',
        onChangeHandler: 'onChangeText',
        props: {
          title: 'Location',
          inputStyle: styles.login,
          containerStyle: styles.container,
          titleStyle: styles.title,
        },
        getValueInOnChange: text => text,
        debounce: 500,
      }, {
        name: 'description',
        component: ValidatedText,
        validators: ['required'],
        errorPropName: 'error',
        onChangeHandler: 'onChangeText',
        props: {
          title: 'Description',
          inputStyle: styles.description,
          containerStyle: styles.descriptionContainer,
          titleStyle: styles.title,
          multiline: true,
          numberOfLines: 4,
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
      date: this.state.date.toLocaleDateString([], { year: 'numeric', month: 'short', day: 'numeric' }),
      arriveTime: this.state.arriveTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      servingTime: this.state.servingTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    // Submit to REDUX
    console.log('goin\' to REDUX', data);
    console.log('this.props.navigateTo');
  }

  render() {
    const fields = this.state.fields;

    return (
      <View style={styles.mainContainer}>
        {fields.potluckName.element}
        {fields.theme.element}
        <View style={this.state.showDate ? styles.expanded : styles.container}>
          <View style={styles.dateContainer}>
            <Text style={styles.title}>Date</Text>
            <TouchableOpacity
              style={styles.datePickerButton}
              onPress={() => { this.setState({ showDate: !this.state.showDate }); }}
            >
              <Text>{this.state.date.toLocaleDateString([], { year: 'numeric', month: 'short', day: 'numeric' })}</Text>
            </TouchableOpacity>
          </View>
          {this.state.showDate &&
            <DatePickerIOS
              style={styles.datePicker}
              date={this.state.date}
              mode="date"
              timeZoneOffsetInMinutes={this.state.timeZoneOffsetInHours * 60}
              onDateChange={this.onDateChange}
            />
          }
        </View>
        <View style={this.state.showArriveTime ? styles.expanded : styles.container} >
          <View style={styles.dateContainer}>
            <Text style={styles.title}>Serving Time</Text>
            <TouchableOpacity
              style={styles.datePickerButton}
              onPress={() => { this.setState({ showArriveTime: !this.state.showArriveTime }); }}
            >
              <Text>{this.state.arriveTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Text>
            </TouchableOpacity>
          </View>
          {this.state.showArriveTime &&
            <DatePickerIOS
              style={styles.datePicker}
              date={this.state.arriveTime}
              mode="time"
              timeZoneOffsetInMinutes={this.state.timeZoneOffsetInHours * 60}
              onDateChange={this.onArriveTimeChange}
            />
          }
        </View>
        <View style={this.state.showServingTime ? styles.expanded : styles.container} >
          <View style={styles.dateContainer}>
            <Text style={styles.title}>Arriving Time</Text>
            <TouchableOpacity
              style={styles.datePickerButton}
              onPress={() => { this.setState({ showServingTime: !this.state.showServingTime }); }}
            >
              <Text>{this.state.servingTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Text>
            </TouchableOpacity>
          </View>
          {this.state.showServingTime &&
            <DatePickerIOS
              style={styles.datePicker}
              date={this.state.servingTime}
              mode="time"
              timeZoneOffsetInMinutes={this.state.timeZoneOffsetInHours * 60}
              onDateChange={this.onServingTimeChange}
            />
          }
        </View>
        {fields.guestNumber.element}
        {fields.location.element}
        {fields.description.element}            
        <TouchableHighlight style={styles.button} onPress={() => this.handleSubmit()}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableHighlight>
      </View >
    );
  }
}
export default Form;
