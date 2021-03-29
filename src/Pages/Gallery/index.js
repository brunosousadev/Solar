import React from 'react';
import {Text} from 'react-native';
import Wallpaper from '../../components/Wallpaper';

import {Container} from './styles';

const Gallery = () => {
  return (
    <Container>
      <Wallpaper>
        <Text style={{color: '#fff'}}>Gallery Screen</Text>
      </Wallpaper>
    </Container>
  );
};

export default Gallery;
