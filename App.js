import React from 'react';

import {StatusBar} from 'react-native';
import Welcome from './src/Pages/Welcome';

const App = () => {
  return (
    <>
    <StatusBar barStyle="light-content" backgroundColor="#151515" />
    <Welcome />
    </>
  );
};

export default App;
