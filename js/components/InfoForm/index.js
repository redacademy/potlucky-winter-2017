import React from 'react';
import { connect } from 'react-redux';
import Gandalf from 'gandalf-validator';
import { View } from 'react-native';
import styles from './styles';
import ValidatedText from './../ValidatedText';
import DatePicker from './../../components/DatePicker';
import SingleFlatButton from './../../components/SingleFlatButton';
import { addInfo } from '../../redux/modules/newPotluckActions';

class Form extends Gandalf {
  constructor() {
    const fields = [
      {
        name: 'title',
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

    this.state.eventDate = new Date();
    this.state.timeZoneOffsetInHours = (-1) * (new Date()).getTimezoneOffset() / 60;
    this.state.showEventDate = false;
    this.state.showArriveTime = false;
    this.state.showServeTime = false;
    this.state.arriveTime = new Date();
    this.state.serveTime = new Date();
  }

  onEventDateChange = (eventDate) => {
    this.setState({ eventDate });
  };

  onArriveTimeChange = (time) => {
    this.setState({
      arriveTime: time
    });
  }

  onServeTimeChange = (time) => {
    this.setState({
      serveTime: time
    });
  }

  handleSubmit = () => {
    let data = this.getCleanFormData();
    if (!data) return;

    data = {
      ...data,
      eventDate: this.state.eventDate.toLocaleDateString([], { year: 'numeric', month: 'short', day: 'numeric' }),
      arriveTime: this.state.arriveTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      serveTime: this.state.serveTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    this.props.dispatch(addInfo(data));
  }

  render() {
    const fields = this.state.fields;

    return (
      <View style={styles.mainContainer}>
        {fields.title.element}
        {fields.theme.element}
        <DatePicker
          title="Date"
          showDate={this.state.showEventDate}
          localDate={this.state.eventDate.toLocaleDateString([], { year: 'numeric', month: 'short', day: 'numeric' })}
          date={this.state.eventDate}
          onPress={() => { this.setState({ showEventDate: !this.state.showEventDate }); }}
          timeZoneOffsetInMinutes={this.state.timeZoneOffsetInHours * 60}
          onDateChange={this.onEventDateChange}
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
          showDate={this.state.showServeTime}
          localDate={this.state.serveTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          date={this.state.serveTime}
          onPress={() => { this.setState({ showServeTime: !this.state.showServeTime }); }}
          timeZoneOffsetInMinutes={this.state.timeZoneOffsetInHours * 60}
          onDateChange={this.onServeTimeChange}
          mode="time"
        />
        {fields.location.element}
        {fields.description.element}
        <SingleFlatButton title="Submit" onPress={this.handleSubmit} />
      </View>
    );
  }
}

export default connect()(Form);
