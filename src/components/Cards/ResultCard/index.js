import React from 'react';
import MercuryImage from '../../../assets/Planet/Mercury.png';
import SaveImage from '../../../assets/Save.png';
import forwardImage from '../../../assets/ForwardOrange.png';

import {
  Container,
  ContainerLeft,
  Image,
  ContainerRight,
  ContainerTitle,
  Name,
  Save,
  Description,
  Button,
  TextButton,
  Forward,
} from './styles';

const ResultCard = ({name, description, image}) => {
  return (
    <Container>
      <ContainerLeft>
        <Image source={MercuryImage} />
      </ContainerLeft>
      <ContainerRight>
        <ContainerTitle>
          <Name>Neturno</Name>
          <Save source={SaveImage} />
        </ContainerTitle>

        <Description>
          Netuno é o oitavo planeta do Sistema Solar, o último a partir do Sol
          desde a reclassificação...
        </Description>
        <Button onPress={() => {}}>
          <TextButton>Continuar lendo</TextButton>
          <Forward source={forwardImage} />
        </Button>
      </ContainerRight>
    </Container>
  );
};

export default ResultCard;
