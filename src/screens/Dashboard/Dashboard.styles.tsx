import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors?.background};
`;


export const Header = styled.View`
  height:${RFPercentage(37)}px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors?.primary};

  justify-content: center;
  align-items: center;
`;

export const UserWrapper = styled.View`
  width: 100%;
  padding:0 24px;
`


export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Photo = styled.Image`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
  border-radius:5px;
`;

export const User = styled.View`
  margin-left: 17px;

`;

export const UserGreeting = styled.Text`
  color: ${({ theme }) => theme.colors?.shape};
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts?.regular} ;

`;

export const UserName = styled.Text`
  color: ${({ theme }) => theme.colors?.shape};
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts?.bold}

`;
