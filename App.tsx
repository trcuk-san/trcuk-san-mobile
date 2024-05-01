import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './stacks/RootStack';
import Home from './screens/Home';
import Login from './screens/Login';

const App = () => {
  return (
    <NavigationContainer>
      {/* <RootStack /> */}
      <Login />
    </NavigationContainer>
  );
};

export default App;
