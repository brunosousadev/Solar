import React from 'react';
import {Text} from 'react-native';
import Wallpaper from '../../components/Wallpaper';
import {Container} from './styles';

const Save = () => {
  return (
    <Container>
      <Wallpaper>
        <Text style={{color: '#fff'}}>Save Screen</Text>
      </Wallpaper>
    </Container>
  );
};

export default Save;
