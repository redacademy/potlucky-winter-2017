import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Gandalf from 'gandalf-validator';
import { View, Text, TouchableHighlight } from 'react-native';
import styles from './styles';
import ValidatedText from './../ValidatedText';
import DatePicker from './../../components/DatePicker';
import SingleFlatButton from './../../components/SingleFlatButton';
import { addInfo } from '../../redux/modules/newPotluckActions';

class Form extends Gandalf {
  constructor() {
    const fields = [
      {
        name: 'potluckName',
        component: ValidatedText,
        validators: ['required'],
        errorPropName: 'error',
        props: {
          title: 'Potluck Name',
          inputStyle: styles.login,
          inputContainerStyle: styles.inputContainerStyle,
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
        props: {
          title: 'Theme',
          inputStyle: styles.login,
          inputContainerStyle: styles.inputContainerStyle,
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
        props: {
          title: 'Guest Number',
          inputStyle: styles.login,
          inputContainerStyle: styles.inputContainerStyle,
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
        props: {
          title: 'Location',
          inputStyle: styles.login,
          inputContainerStyle: styles.inputContainerStyle,
          containerStyle: styles.container,
          titleStyle: styles.title,
        },
        getValueInOnChange: text => text,
        debounce: 500,
      },
      {
        name: 'description',
        component: ValidatedText,
        validators: ['required'],
        errorPropName: 'error',
        props: {
          title: 'Description',
          inputStyle: styles.description,
          inputContainerStyle: styles.descriptionContainer,
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

  handleSubmit = () => {
    let data = this.getCleanFormData();
    if (!data) return;
    data = {
      ...data,
      date: this.state.date.toLocaleDateString([], { year: 'numeric', month: 'short', day: 'numeric' }),
      arriveTime: this.state.arriveTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      servingTime: this.state.servingTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    console.log(data)
    this.props.dispatch(addInfo(data));
  }

  render() {
    const fields = this.state.fields;

    return (
      <View style={styles.mainContainer}>
        {fields.potluckName.element}
        {fields.theme.element}
        <DatePicker
          title="Date"
          showDate={this.state.showDate}
          localDate={this.state.date.toLocaleDateString([], { year: 'numeric', month: 'short', day: 'numeric' })}
          date={this.state.date}
          onPress={() => { this.setState({ showDate: !this.state.showDate }); }}
          timeZoneOffsetInMinutes={this.state.timeZoneOffsetInHours * 60}
          onDateChange={this.onDateChange}
          mode="date"
        />
        <DatePicker
          title="Arriving Time"
          showDate={this.state.showArriveTime}
          localDate={this.state.arriveTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          date={this.state.arriveTime}
          onPress={() => { this.setState({ showArriveTime: !this.state.showArriveTime }); }}
          timeZoneOffsetInMinutes={this.state.timeZoneOffsetInHours * 60}
          onDateChange={this.onArriveTimeChange}
          mode="time"
        />
        <DatePicker
          title="Serving Time"
          showDate={this.state.showServingTime}
          localDate={this.state.servingTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          date={this.state.servingTime}
          onPress={() => { this.setState({ showServingTime: !this.state.showServingTime }); }}
          timeZoneOffsetInMinutes={this.state.timeZoneOffsetInHours * 60}
          onDateChange={this.onServingTimeChange}
          mode="time"
        />
        {fields.guestNumber.element}
        {fields.location.element}
        {fields.description.element}
        <SingleFlatButton title="Submit" onPress={this.handleSubmit} />
      </View>
    );
  }
}

export default connect()(Form);
