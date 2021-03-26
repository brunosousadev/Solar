import React from 'react';

import {Container, ContainerImage, Input} from './styles';
import SearchIcon from '../../assets/IconTabBar/SearchWhite.svg';

const TextInput = ({
  placeholder = 'placeholder',
  placeholderTextColor = '#ffffff',
  text,
  onChangeText,
}) => {
  //const [text, onChangeText] = React.useState('');

  return (
    <Container>
      <ContainerImage>
        <SearchIcon weight={20} height={20} />
      </ContainerImage>
      <Input
        value={text}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
      />
    </Container>
  );
};

export default TextInput;
