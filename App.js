import 'react-native-gesture-handler';
import React from 'react';

import {StatusBar} from 'react-native';
import Routes from './src/routes/routes';
const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#151515" />
      <Routes />
    </>
  );
};

export default App;
