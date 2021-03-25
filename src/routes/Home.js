import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../Pages/Home';
import Gallery from '../Pages/Gallery';
import Save from '../Pages/Save';
import Search from '../Pages/Search';
import MyTab from './MyTab';
import HomeIcon from '../assets/IconTabBar/HomeWhite.svg';
import SearchIcon from '../assets/IconTabBar/SearchWhite.svg';
import SaveIcon from '../assets/IconTabBar/SaveWhite.svg';
import GalleryIcon from '../assets/IconTabBar/GalleryWhite.svg';

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
const IconScreen = {
  Home: HomeIcon,
  Search: SearchIcon,
  Save: SaveIcon,
  Gallery: GalleryIcon,
};

function HomeRoute() {
  const {Navigator, Screen} = Tab;
  return (
    <Navigator
      tabBar={props => <MyTab {...props} IconScreen={IconScreen} />}
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
