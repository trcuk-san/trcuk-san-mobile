import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Detail from '../screens/Detail';
import AddFee from '../screens/AddFee';

export type HomeStackParamList = {
  Home: undefined;
  DetailToilet: {
    _id: string;
    latitude: string;
    longitude: string;
    title: string;
    contact: string;
    cost: string;
    handicap: boolean;
    free: boolean;
    type: string;
    timeOpen: string;
    timeClose: string;
    toiletpicture: string;
  };
  AddFee: undefined;
};

const Stack = createNativeStackNavigator<HomeStackParamList>();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="DetailToilet" component={Detail} />
      <Stack.Screen name="AddFee" component={AddFee} />
    </Stack.Navigator>
  );
};

export default HomeStack;
