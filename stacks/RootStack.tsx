import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthStack from './AuthStack';
import AuthContext from '../context/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BottomTabStack from './BottomTabStack';
import {RootStackList} from '.';

const RootStack = () => {
  const Stack = createNativeStackNavigator<RootStackList>();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkTokenInStorage = async () => {
      await AsyncStorage.getItem('token').then(token => {
        console.log('token in storage', token);
        if (token) {
          // setIsLoggedIn(String(token).length > 0 ? true : false);
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      });
    };
    checkTokenInStorage();
  }, []);

  return (
    <AuthContext.Provider
      value={{isLoggedIn: isLoggedIn, setLoggedIn: setIsLoggedIn}}>
      <Stack.Navigator
        initialRouteName="AuthStack"
        screenOptions={{
          headerShown: false,
          statusBarHidden: true,
        }}>
        <Stack.Screen name="BottomTabStack" component={BottomTabStack} />
        <Stack.Screen name="AuthStack" component={AuthStack} />
      </Stack.Navigator>
    </AuthContext.Provider>
  );
};

export default RootStack;
