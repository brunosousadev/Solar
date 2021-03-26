import React, {useState} from 'react';
import IconPlanets from '../../assets/Planets.png';
import HomePage from '../../assets/HomePage.png';
import Category from '../../components/Category';
import AppBar from './AppBar';
import Input from '../../components/Input';
// <Category icon={IconPlanets} label={'Planetas'} />|

import {Container, ImageBackground} from './styles';
const Home = () => {
  const [text, onChangeText] = useState('');
  return (
    <Container>
      <ImageBackground source={HomePage}>
        <AppBar />
        <Input text={text} onChangeText={onChangeText} />
      </ImageBackground>
    </Container>
  );
};

export default Home;
