import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../Pages/Home';
import Gallery from '../Pages/Gallery';
import Save from '../Pages/Save';
import Search from '../Pages/Search';
import MyTab from './MyTab';

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
      tabBar={props => <MyTab {...props} />}
      initialRouteName="Home"
      tabBarOptions={tabBarOptions}>
      <Screen
        name="Home"
        component={Home}
        options={{
          title: 'Início',
        }}
      />
      <Screen
        name="Search"
        component={Search}
        options={{
          title: 'Buscar',
        }}
      />
      <Screen
        name="Save"
        component={Save}
        options={{
          title: 'Salvos',
        }}
      />
      <Screen
        name="Gallery"
        component={Gallery}
        options={{
          title: 'Galeria',
        }}
      />
    </Navigator>
  );
}

export default HomeRoute;
