import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useContext} from 'react';
import AuthContext from '../context/AuthContext';
import {MyTask} from '../services/order';
import {StyleSheet} from 'react-native';

const ProfileStack = () => {
  const Stack = createNativeStackNavigator<ProfileParamList>();
  const {isLoggedIn} = useContext(AuthContext);
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerShown: false,
        // navigationBarHidden: true,
      }}>
      <Stack.Screen name="MyTask" component={MyTask} />
    </Stack.Navigator>
  );
};

export default ProfileStack;

const styles = StyleSheet.create({});
