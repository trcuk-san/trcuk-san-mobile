import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useContext} from 'react';
import AuthContext from '../context/AuthContext';
import {StyleSheet} from 'react-native';
import {ProfileStackList} from '.';
import Detail from '../pages/Detail';
import Profile from '../pages/Profile';

const Stack = createNativeStackNavigator<ProfileStackList>();

const ProfileStack = () => {
  const {isLoggedIn} = useContext(AuthContext);
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerShown: false,
        // navigationBarHidden: true,
      }}>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
};

export default ProfileStack;

const styles = StyleSheet.create({});
