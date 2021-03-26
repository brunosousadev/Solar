import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient)`
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius: 8px;
`;

export const Icon = styled.Image`
  width: 24px;
  height: 24px;
`;

export const Label = styled.Text`
  color: #fff;
  font-size: 14px;
`;
