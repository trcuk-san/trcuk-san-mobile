import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigatorScreenParams} from '@react-navigation/native';
import BottomTabStack, {BottomTabParamList} from './BottomTabStack';
import AuthStack, {AuthTabParamList} from './AuthStack';

export type RootStackList = {
  AuthStack: NavigatorScreenParams<AuthTabParamList>;
  MainStack: NavigatorScreenParams<BottomTabParamList>;
};

const RootStack = () => {
  const Stack = createNativeStackNavigator<RootStackList>();
  return (
    // <AuthContext.Provider
    // value={{isLoggedIn: isLoggedIn, setLoggedIn: setIsLoggedIn}}>
    <Stack.Navigator
      initialRouteName="MainStack"
      screenOptions={{
        headerShown: false,
        statusBarHidden: true,
      }}>
      <Stack.Screen name="MainStack" component={BottomTabStack} />
      <Stack.Screen name="AuthStack" component={AuthStack} />
    </Stack.Navigator>
    // </AuthContext.Provider>
  );
};

export default RootStack;
