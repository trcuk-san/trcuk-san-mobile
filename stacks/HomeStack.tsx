import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeStackList} from './index';
import Home from '../pages/Home';
import UpdateTrackingStack from './UpdateTrackingStack';

const Stack = createNativeStackNavigator<HomeStackList>();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="UpdateTrackingStack"
        component={UpdateTrackingStack}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
