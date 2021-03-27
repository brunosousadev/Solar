import styled from 'styled-components/native';

export const Container = styled.View`
  width: 140px;
  height: 190px;
  overflow: hidden;
  background-color: #151515;
  border-radius: 8px;
`;

export const ContainerImage = styled.View`
  position: relative;
  left: -40px;
  top: -30px;
`;

export const PlanetImage = styled.Image`
  width: 164px;
  height: 164px;
`;

export const ContainerInfo = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-left: 10px;
  margin-right: 10px;
`;

export const Name = styled.Text`
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
`;

export const Forward = styled.Image`
  width: 16px;
  height: 16px;
`;
