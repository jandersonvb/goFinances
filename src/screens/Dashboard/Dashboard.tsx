import React from 'react';


import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName
} from './Dashboard.styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/25486388?v=4' }} />
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Janderson</UserName>
            </User>
          </UserInfo>
        </UserWrapper>
      </Header>
    </Container>
  );
};

export { Dashboard };
