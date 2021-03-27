import React, {useState} from 'react';
import IconPlanets from '../../assets/Planets.png';
import HomePage from '../../assets/HomePage.png';
import Category from '../../components/Category';
import AppBar from './AppBar';
import Input from '../../components/Input';
import {FlatList} from 'react-native';

import {
  Container,
  ImageBackground,
  CategoryLabel,
  ContainerItem,
} from './styles';

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
        <Input text={text} onChangeText={onChangeText} />
        <CategoryLabel>Categorias</CategoryLabel>
        <FlatList
          horizontal={true}
          data={category}
          renderItem={({item}) => (
            <ContainerItem>
              <Category {...item} />
            </ContainerItem>
          )}
          keyExtractor={(_item, index) => index}
        />
      </ImageBackground>
    </Container>
  );
};

export default Home;
