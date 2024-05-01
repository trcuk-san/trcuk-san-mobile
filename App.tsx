import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './stacks/RootStack';
import Home from './screens/Home';
import Login from './screens/Login';
import Profile from './screens/Profile';

const App = () => {
  return (
    <NavigationContainer>
      {/* <RootStack /> */}
      <Home />
    </NavigationContainer>
  );
};

export default App;
