import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './stacks/RootStack';
import Home from './screens/Home';
import Login from './screens/Login';
import Profile from './screens/Profile';
import Detail from './screens/Detail';
import AddFee from './screens/AddFee';

const App = () => {
  return (
    <NavigationContainer>
      {/* <RootStack /> */}
      <Detail />
      {/* <AddFee /> */}
    </NavigationContainer>
  );
};

export default App;
