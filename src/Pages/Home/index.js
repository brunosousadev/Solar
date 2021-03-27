import React, {useState} from 'react';
import IconPlanets from '../../assets/Planets.png';
import HomePage from '../../assets/HomePage.png';

import MercuryImage from '../../assets/Planet/Mercury.png';
import VenusImage from '../../assets/Planet/Venus.png';

import EarthImage from '../../assets/Planet/Earth.png';
import MarsImage from '../../assets/Planet/Mars.png';
import JupiterImage from '../../assets/Planet/Jupiter.png';
import SaturnImage from '../../assets/Planet/Saturn.png';
import UranusImage from '../../assets/Planet/Uranus.png';
import NeptuneImage from '../../assets/Planet/Neptune.png';

import Category from '../../components/Category';
import AppBar from './AppBar';
import Input from '../../components/Input';
import PlanetCard from '../../components/Cards/PlanetCard';

import {
  Container,
  ImageBackground,
  InfoList,
  ScrollItem,
  ContainerItem,
} from './styles';

const planets = [
  {name: 'Mercúrio', image: MercuryImage},
  {name: 'Vênus', image: VenusImage},
  {name: 'Terra', image: EarthImage},
  {name: 'Marte', image: MarsImage},
  {name: 'Júpter', image: JupiterImage},
  {name: 'Saturno', image: SaturnImage},
  {name: 'Urano', image: UranusImage},
  {name: 'Neturno', image: NeptuneImage},
];

const category = [
  {
    icon: IconPlanets,
    label: 'Planetas',
    colors: ['#5935FF', '#47408E'],
  },
  {
    icon: IconPlanets,
    label: 'Asteróides',
    colors: ['#ff6cd9', '#ff2184'],
  },
  {
    icon: IconPlanets,
    label: 'Estrelas',
    colors: ['#01d4e4', '#009de0'],
  },
  {
    icon: IconPlanets,
    label: 'Galáxias',
    colors: ['#f9c270', '#ffaa2b'],
  },
];

const Home = () => {
  const [text, onChangeText] = useState('');
  return (
    <Container>
      <ImageBackground source={HomePage}>
        <AppBar />
        <Input
          text={text}
          onChangeText={onChangeText}
          placeholder={'Procure planetas, asteroides, estrelas...'}
        />
        <InfoList>Categorias</InfoList>
        <ScrollItem
          horizontal={true}
          data={category}
          renderItem={({item}) => (
            <ContainerItem>
              <Category {...item} />
            </ContainerItem>
          )}
          keyExtractor={(_item, index) => index}
        />
        <InfoList>Planetas</InfoList>
        <ScrollItem
          horizontal={true}
          data={planets}
          renderItem={({item}) => (
            <ContainerItem>
              <PlanetCard {...item} />
            </ContainerItem>
          )}
          keyExtractor={(_item, index) => index}
        />
      </ImageBackground>
    </Container>
  );
};

export default Home;
