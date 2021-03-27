import React from 'react';
import SettingImage from '../../../assets/Settings.png';

import {
  Container,
  ContainerInfo,
  ContainerSetting,
  User,
  FullName,
  Description,
  SettingsIcon,
} from './styles';

const AppBar = () => {
  return (
    <Container>
      <ContainerInfo>
        <User>
          Olá, <FullName>Julianna de Paula</FullName>{' '}
        </User>
        <Description>o que você vai aprender hoje ?</Description>
      </ContainerInfo>
      <ContainerSetting>
        <SettingsIcon source={SettingImage} />
      </ContainerSetting>
    </Container>
  );
};

export default AppBar;
