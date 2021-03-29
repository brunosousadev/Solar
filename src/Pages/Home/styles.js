import styled from 'styled-components/native';
import {FlatList} from 'react-native';

export const ScrollItem = styled(FlatList)``;

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #000000;
`;

export const ContainerItem = styled.View`
  margin: 20px 0px 0px 20px;
`;

export const InfoList = styled.Text`
  font-size: 16px;
  color: #ffffff;
  padding-left: 20px;
  padding-top: 20px;
`;
