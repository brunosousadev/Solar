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
          Olá, <FullName>Bruno Sousa</FullName>{' '}
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
