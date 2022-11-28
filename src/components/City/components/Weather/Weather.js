import React, { useState } from 'react';
import Details from './components/Details';
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
  const [temperature, setTemperature] = useState();
  const [condition, setCondition] = useState();

  return (
    <div>
      <button
        onClick={() => {
          setTemperature('15.33');
          setCondition('Cloudy');
        }}>
        debug
      </button>
      <Temperature>{`${temperature} °C`}</Temperature>
      <Condition>{`${condition}`}</Condition>
      <Details />
    </div>
  );
};

export default Weather;
