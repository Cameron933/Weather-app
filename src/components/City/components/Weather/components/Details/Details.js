import React, { useState } from 'react';
import styled from 'styled-components';
import Item from './components/Item';
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
  const [humidity, setHumidity] = useState();
  const [wind, setWind] = useState();

  return (
    <Container>
      <Item title="Humidity">{`${humidity}%`}</Item>
      <Divider />
      <Item title="Wind">{`${wind} K/M`}</Item>
    </Container>
  );
};

export default Details;
