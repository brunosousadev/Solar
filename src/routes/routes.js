import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Welcome from '../Pages/Welcome';
import HomeRoute from './Home';

const Stack = createStackNavigator();

function Route() {
  const {Navigator, Screen} = Stack;

  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Screen name="Welcome" component={Welcome} />
        <Screen name="HomeRoute" component={HomeRoute} />
      </Navigator>
    </NavigationContainer>
  );
}

export default Route;
