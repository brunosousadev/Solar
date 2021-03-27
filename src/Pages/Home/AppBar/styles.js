import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.View`
  padding: 20px 20px;
  flex: 1;
  flex-direction: row;
  max-width: 400px;
  max-height: 120px;
`;

export const ContainerInfo = styled.View``;

export const ContainerSetting = styled.View`
  flex: 1;
`;

export const User = styled.Text`
  font-size: 32px;
  font-weight: bold;
  color: #ffffff;
`;

export const FullName = styled.Text`
  font-size: 32px;
  font-weight: bold;
  color: #ff2184;
`;

export const Description = styled.Text`
  font-size: 16px;
  color: #ffffff;
`;

export const SettingsIcon = styled.Image`
  height: 24px;
  width: 24px;
  position: absolute;
  right: 0;
  top: 10px;
`;
