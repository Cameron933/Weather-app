import React from 'react';
import Weather from './components/Weather';
import Name from './components/Name';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 64px 96px;
  background-image: url(https://i.imgur.com/GhQZhaO.jpg);
  background-size: cover;
  color: white;
`;

const City = () => {
  return (
    <Container>
      <Weather />
      <Name />
    </Container>
  );
};

export default City;
