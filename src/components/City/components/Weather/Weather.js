import React from 'react';
import D from './components/Details';
import styled from 'styled-components';

const Temperature = styled.div`
  font-size: 5rem;
`;
const Condition = styled.div`
  text-align: center;
  font-size: 1.5rem;
  letter-spacing: 5px;
  margin-top: 0.25rem;
  color: rgba(255, 255, 255, 0.7);
`;

const Weather = () => {
  return (
    <div>
      <Temperature>15.33 *</Temperature>
      <Condition>Clouds</Condition>
      <D></D>
    </div>
  );
};

export default Weather;
