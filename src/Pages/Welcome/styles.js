import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export const WallpaperButton = styled(LinearGradient)``;

export const Container = styled.View`
  flex: 1;
  background: #151515;
`;

export const ContainerButton = styled.View`
  margin-top: 100px;
  justify-content: center;
  align-items: center;
`;

export const Info = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: #ffffff;
  opacity: 0.6;
  margin-bottom: 10px;
`;

export const Description = styled.Text`
  font-size: 32px;
  font-weight: 500;
  color: #ffffff;
  text-align: center;
`;

export const ImageBackground = styled.ImageBackground`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Forward = styled.Image`
  width: 16px;
  height: 16px;
`;
export const Button = styled(TouchableOpacity)`
  height: 51px;
  justify-content: center;
  align-items: center;
  min-width: 206px;
  border-radius: 4px;
  flex-direction: row;
`;

export const TextButton = styled.Text`
  margin-right: 20px;
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
`;
