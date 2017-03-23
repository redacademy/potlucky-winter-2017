import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { styles as appStyles } from './styles';

const ValidatedText = ({
  title,
  onChange,
  error,
  placeholder,
  style,
  autoCapitalize,
  keyboardType,
  secureTextEntry
}) => (
  <View style={appStyles.container}>
    <View style={appStyles.container}>
      <Text style={appStyles.title}>{ title }</Text>
      <TextInput
        onChangeText={onChange}
        placeholder={placeholder}
        style={style}
        autoCapitalize={autoCapitalize}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
      />
    </View>
    { !!error && <View style={appStyles.errorContainer}>
      <Text style={appStyles.errorMessage}>
        { error }
      </Text>
    </View>}
  </View>
  );


export default ValidatedText;
