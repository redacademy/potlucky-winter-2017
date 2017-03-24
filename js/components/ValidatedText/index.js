import React from 'react';
import { View, Text, TextInput } from 'react-native';
import appStyles from './styles';

const ValidatedText = ({
  title,
  onChange,
  error,
  placeholder,
  inputStyle,
  titleStyle,
  containerStyle,
  autoCapitalize,
  inputContainerStyle,
  keyboardType,
  secureTextEntry,
  multiline,
  numberOfLines,
}) => (
    <View style={containerStyle}>
      <View style={inputContainerStyle}>
        {
          !!title && <Text style={titleStyle}>{title}</Text>
        }
        <TextInput
          onChangeText={onChange}
          placeholder={placeholder}
          style={inputStyle}
          autoCapitalize={autoCapitalize}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          multiline={multiline}
          numberOfLines={numberOfLines}
        />
      </View>
      {!!error && <View style={appStyles.errorContainer}>
        <Text style={appStyles.errorMessage}>
          {error}
        </Text>
      </View>}
    </View>
  );

export default ValidatedText;
