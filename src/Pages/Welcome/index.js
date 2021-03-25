import React from 'react';
import {useNavigation} from '@react-navigation/native';
import backgroundImage from '../../assets/Background.png';
import forwardImage from '../../assets/Forward.png';

import {
  Container,
  ContainerButton,
  Info,
  Description,
  ImageBackground,
  Button,
  TextButton,
  Forward,
} from './styles';

const Welcome = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <ImageBackground source={backgroundImage}>
        <Info>Aperte o cinto</Info>
        <Description>Comece sua jornada pelo sistema solar.</Description>
        <ContainerButton>
          <Info>Pronto para a decolagem?</Info>
          <Button
            onPress={() => {
              navigation.navigate('HomeRoute');
            }}>
            <TextButton>Começar</TextButton>
            <Forward source={forwardImage} />
          </Button>
        </ContainerButton>
      </ImageBackground>
    </Container>
  );
};

export default Welcome;
