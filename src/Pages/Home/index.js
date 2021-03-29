import React, {useState} from 'react';

import {
  Category,
  AppBar,
  Input,
  PlanetCard,
  planets,
  category,
  Wallpaper,
} from './protocols';

import {Container, InfoList, ScrollItem, ContainerItem} from './styles';

const Home = () => {
  const [text, onChangeText] = useState('');
  return (
    <Container>
      <Wallpaper>
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
      </Wallpaper>
    </Container>
  );
};

export default Home;
