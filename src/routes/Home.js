import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Pages/Home';
import Gallery from '../Pages/Gallery';
import Save from '../Pages/Save';
import Search from '../Pages/Search';

const Tab = createBottomTabNavigator();

const tabBarOptions = {
  activeTintColor: '#ffffff',
  style: {
    backgroundColor: '#151515',
    alignItems: 'center',
    justifyContext: 'center',
  },
  safeAreaInsets: {
    bottom: 10,
  },
  labelStyle: {
    marginBottom: 2,
    paddingTop: 10,
  },
};

function HomeRoute() {
  const {Navigator, Screen} = Tab;
  return (
    <Navigator
      screenOptions={({route, navigation}) => {
        return {tabBarLabel: navigation.isFocused() ? route.name : ''};
      }}
      initialRouteName="Home"
      tabBarOptions={tabBarOptions}>
      <Screen name="Home" component={Home} />
      <Screen name="Search" component={Search} />
      <Screen name="Save" component={Save} />
      <Screen name="Gallery" component={Gallery} />
    </Navigator>
  );
}

export default HomeRoute;
