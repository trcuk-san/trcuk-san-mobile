import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Detail from '../screens/Detail';
import AddFeeStack from './AddFeeStack';

const Stack = createNativeStackNavigator();

const DetailStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="DetailToilet" component={Detail} />
      <Stack.Screen name="AddFeeStack" component={AddFeeStack} />
    </Stack.Navigator>
  );
};

export default DetailStack;
