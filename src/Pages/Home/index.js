import React from 'react';
import IconPlanets from '../../assets/Planets.png';
import HomePage from '../../assets/HomePage.png';
import Category from '../../components/Category';
import AppBar from './AppBar';

import {Container, ImageBackground} from './styles';
const Home = () => {
  return (
    <Container>
      <ImageBackground source={HomePage}>
        <AppBar />
        <Category icon={IconPlanets} label={'Planetas'} />
      </ImageBackground>
    </Container>
  );
};

export default Home;
