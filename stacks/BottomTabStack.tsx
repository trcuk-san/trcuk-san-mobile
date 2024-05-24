import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  Pressable,
  LayoutChangeEvent,
} from 'react-native';
import React, {useReducer, useRef} from 'react';
import {
  createBottomTabNavigator,
  BottomTabBarProps,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {House, User} from 'phosphor-react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Svg, {Path} from 'react-native-svg';
import {
  NavigationContainer,
  NavigatorScreenParams,
  useNavigation,
} from '@react-navigation/native';
import HomeStack from './HomeStack';
import ProfileStack from './ProfileStack';
import {BottomTabStackList} from '.';

const Stack = createBottomTabNavigator<BottomTabStackList>();

const BottomTabStack = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Stack.Navigator
        initialRouteName="HomeStack"
        screenOptions={{
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          // tabBarActiveTintColor: '#FFA897',
          // tabBarInactiveTintColor: '#BABCCA',
          tabBarStyle: {
            backgroundColor: '#2C2F4A',
            height: 50,
          },
        }}>
        <Stack.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            tabBarIcon: ({focused, color, size}) => (
              <House
                color={focused ? '#FFA897' : '#BABCCA'}
                size={27}
                weight="fill"
              />
            ),
          }}
        />
        <Stack.Screen
          name="ProfileStack"
          component={ProfileStack}
          options={{
            tabBarIcon: ({focused, color, size}) => (
              <User
                color={focused ? '#FFA897' : '#BABCCA'}
                size={27}
                weight="fill"
              />
            ),
          }}
        />
      </Stack.Navigator>
    </>
  );
};

export default BottomTabStack;

const styles = StyleSheet.create({});
