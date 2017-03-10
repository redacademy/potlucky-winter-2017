
import React, { PropTypes } from 'react';
import { Text, View, } from 'react-native';
import { styles } from './styles';

const Hello = () => {
  return (
  	<View style={styles.hello}>
        <Text style={{ marginBottom: 100 }}>Hello.js</Text>
        <Text>Welcome to your new React Native App</Text>
        <Text>Your App Comes With:</Text>
        <Text>Redux</Text>
        <Text>Redux Thunk</Text>
        <Text>Ex-Navigation</Text>
        <Text>Firebase</Text>
        <Text style={{ marginTop: 100 }}>Happy Coding!</Text>
	</View>
  );
}

Hello.propTypes = {

};

export default Hello;