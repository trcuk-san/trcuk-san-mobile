import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UpdateTracking from '../pages/UpdateTracking';
import UpdateFee from '../pages/UpdateFee';

const Stack = createNativeStackNavigator();

const UpdateTrackingStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="UpdateFee" component={UpdateFee} />
      <Stack.Screen name="UpdateTracking" component={UpdateTracking} />
    </Stack.Navigator>
  );
};

export default UpdateTrackingStack;
