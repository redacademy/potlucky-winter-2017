import React from 'react';

import { Text, View, Button, ScrollView } from 'react-native';
import { addFoodGroup } from './../../redux/modules/newPotluckActions';


const FoodPlanningScreen = ({ guests, dispatch }) => (
  <View>
    <Text>Food Screen</Text>
      <Text> Guest Left {guests}</Text>
    <ScrollView>
        <Button
          onPress={() => { dispatch(addFoodGroup({ Appetizers: {} })); }}
          title={'Appetizers'}
        >
        </Button>
        <Button
          onPress={() => { dispatch(addFoodGroup({ Mains: {} })); }}
          title={'Mains'}
        >
        </Button>
        <Button
          onPress={() => { dispatch(addFoodGroup({ Salads: {} })); }}
          title={'Salads'}
        >
        </Button>
        <Button
          onPress={() => { dispatch(addFoodGroup({ Deserts: {} })); }}
          title={'Deserts'}
        >
        </Button>
        <Button
          onPress={() => { dispatch(addFoodGroup({ Drinks: {} })); }}
          title={'Drinks'}
        >
        </Button>
      </ScrollView>
  </View>
  );

export default FoodPlanningScreen;
