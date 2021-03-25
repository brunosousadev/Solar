import React from 'react';
import {View, Text} from 'react-native';

// import { Container } from './styles';

const Home = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000000',
      }}>
      <Text style={{color: '#fff'}}>Home Screen</Text>
    </View>
  );
};

export default Home;
