import React from 'react';
import {Text} from 'react-native';
import Wallpaper from '../../components/Wallpaper';
import {Container} from './styles';

const Search = () => {
  return (
    <Container>
      <Wallpaper>
        <Text style={{color: '#fff'}}>Search Screen</Text>
      </Wallpaper>
    </Container>
  );
};

export default Search;
