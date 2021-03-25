import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Pages/Home';
import Gallery from '../Pages/Gallery';
import Save from '../Pages/Save';
import Search from '../Pages/Search';

const Tab = createBottomTabNavigator();

function HomeRoute() {
  const {Navigator, Screen} = Tab;
  return (
    <Navigator>
      <Screen name="Home" component={Home} />
      <Screen name="Search" component={Search} />
      <Screen name="Save" component={Save} />
      <Screen name="Gallery" component={Gallery} />
    </Navigator>
  );
}

export default HomeRoute;
