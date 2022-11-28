import React from 'react';
import styled from 'styled-components';
import Wind from './components/Wind';
import Humidity from './components/Humidity';
const Container = styled.div`
  display: flex;
  margin-top: 32px;
  justify-content: space-between;
`;
const Divider = styled.div`
  width: 2px;
  background-color: rgba(255, 255, 255, 0.7);
`;

const Details = () => {
  return (
    <Container>
      <Humidity />
      <Divider />
      <Wind />
    </Container>
  );
};

export default Details;
