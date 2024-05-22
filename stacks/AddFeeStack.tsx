import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AddFee from '../screens/AddFee';

const Stack = createNativeStackNavigator();

const AddFeeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="AddFee" component={AddFee} />
    </Stack.Navigator>
  );
};

export default AddFeeStack;
