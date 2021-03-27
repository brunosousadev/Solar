import React from 'react';
import forwardImage from '../../../assets/Forward.png';

import {
  Container,
  ContainerImage,
  ContainerInfo,
  Name,
  PlanetImage,
  Forward,
} from './styles';

const PlanetCard = ({name, image}) => {
  return (
    <Container>
      <ContainerImage>
        <PlanetImage source={image} />
      </ContainerImage>
      <ContainerInfo>
        <Name>{name}</Name>
        <Forward source={forwardImage} />
      </ContainerInfo>
    </Container>
  );
};

export default PlanetCard;
