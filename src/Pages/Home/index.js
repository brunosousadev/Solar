import React from 'react';
import {Container} from './styles';
import IconPlanets from '../../assets/Planets.png';

import Category from '../../components/Category';
const Home = () => {
  return (
    <Container>
      <Category icon={IconPlanets} label={'Planetas'} />
    </Container>
  );
};

export default Home;
