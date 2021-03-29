import React, {useState} from 'react';

import {
  HomePage,
  Category,
  AppBar,
  Input,
  PlanetCard,
  planets,
  category,
} from './protocols';

import {
  Container,
  ImageBackground,
  InfoList,
  ScrollItem,
  ContainerItem,
} from './styles';

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
