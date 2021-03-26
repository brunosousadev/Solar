import React from 'react';
import SettingImage from '../../../assets/Settings.png';

import {
  Container,
  ContainerInfo,
  ContainerSetting,
  UserName,
  FullName,
  Description,
  SettingsIcon,
} from './styles';

const AppBar = () => {
  return (
    <Container>
      <ContainerInfo>
        <UserName>
          Olá, <FullName>Bruno Sousa</FullName>{' '}
        </UserName>
        <Description>o que você vai aprender hoje ?</Description>
      </ContainerInfo>
      <ContainerSetting>
        <SettingsIcon source={SettingImage} />
      </ContainerSetting>
    </Container>
  );
};

export default AppBar;
