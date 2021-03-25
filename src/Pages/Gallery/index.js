import React from 'react';
import {View, Text} from 'react-native';

// import { Container } from './styles';

const Gallery = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000000',
      }}>
      <Text style={{color: '#fff'}}>Gallery Screen</Text>
    </View>
  );
};

export default Gallery;
