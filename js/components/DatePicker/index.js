import React, { PropTypes } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  DatePickerIOS
} from 'react-native';
import styles from './styles';

const DatePicker = ({
  showDate,
  localDate,
  date,
  title,
  onPress,
  timeZoneOffsetInMinutes,
  onDateChange,
  mode
}) => {
  return (
    <View style={showDate ? styles.expanded : styles.container}>
      <View style={styles.dateContainer}>
        <Text style={styles.title}>{title}</Text>
          <TouchableOpacity
            style={styles.datePickerButton}
            onPress={onPress}
          >
            <Text>{localDate}</Text>
          </TouchableOpacity>
        </View>
        {showDate &&
          <DatePickerIOS
            style={styles.datePicker}
            date={date}
            mode={mode}
            timeZoneOffsetInMinutes={timeZoneOffsetInMinutes}
            onDateChange={onDateChange}
          />
        }
    </View>
  )
};

DatePicker.propTypes = {
  showDate: PropTypes.bool.isRequired,
  localDate: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  timeZoneOffsetInMinutes: PropTypes.number.isRequired,
  onDateChange: PropTypes.func.isRequired,
  mode: PropTypes.string.isRequired
};

export default DatePicker;
