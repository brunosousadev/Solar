import React from 'react';
import {Container, Icon, Label} from './styles';

const Category = ({icon, label, colors = ['#5935FF', '#47408E']}) => {
  return (
    <Container colors={colors}>
      <Icon source={icon} />
      <Label>{label}</Label>
    </Container>
  );
};

export default Category;
