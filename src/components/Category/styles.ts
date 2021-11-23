import styled from 'styled-components/native'
import { TouchableOpacity } from 'react-native'

export const Container = styled(TouchableOpacity)`
  width: 104px;
  height: 120px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin-right: 8px;
`;

export const Content = styled.View`
  width: 100px;
  height: 116px;
  border-radius: 8px;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
`;

export const Checked = styled.View`

`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.title700};
  color: ${({ theme }) => theme.colors.heading};
  font-size: 15px;
  margin-top: 20px;
`;