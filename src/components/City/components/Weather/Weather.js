import React, { useEffect, useState } from 'react';
import Details from './components/Details';
import styled from 'styled-components';
import getWeather from '../../../../utils/getWeather';

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

const Weather = ({ temperature, condition, wind, humidity }) => {
  return (
    <div>
      <Temperature>{`${temperature} °`}</Temperature>
      <Condition>{`${condition}`}</Condition>
      <Details wind={wind} humidity={humidity} />
    </div>
  );
};

export default Weather;
