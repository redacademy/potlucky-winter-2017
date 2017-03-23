import React from 'react';
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

export default DatePicker;
