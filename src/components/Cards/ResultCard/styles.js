import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native';

export const Container = styled.View`
  width: 370px;
  height: 200px;
  overflow: hidden;
  background-color: #151515;
  border-radius: 8px;
  flex-direction: row;
`;

export const ContainerLeft = styled.View`
  flex: 1;
  left: -30px;
  top: -60px;
  position: relative;
`;

export const Image = styled.Image`
  width: 200px;
  height: 200px;
`;

export const ContainerRight = styled.View`
  flex: 1;
`;

export const ContainerTitle = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
export const Name = styled.Text`
  font-size: 32px;
  color: #ffffff;
  font-weight: bold;
`;

export const Description = styled.Text`
  font-size: 14px;
  color: #ffffff;
`;

export const Save = styled.Image`
  width: 24px;
  height: 24px;
`;

export const Forward = styled.Image`
  width: 16px;
  height: 16px;
`;

export const Button = styled(TouchableOpacity)`
  height: 51px;
  align-items: center;
  flex-direction: row;
`;

export const TextButton = styled.Text`
  margin-right: 20px;
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
`;
