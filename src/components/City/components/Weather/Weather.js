import React, { useEffect, useState } from 'react';
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

const getWeather = (onSuccess) => {
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      const data = JSON.parse(this.responseText);
      onSuccess(data);
    }
  };

  const cityId = 2158177;
  const apiKey = '';
  xhttp.open(
    'GET',
    `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&units=metric&appid=${apiKey}`,
    true
  );
  xhttp.send();
};

const Weather = () => {
  const [temperature, setTemperature] = useState('');
  const [condition, setCondition] = useState('');

  useEffect(() => {
    getWeather((data) => {
      setTemperature(data.main.temp);
      setCondition(data.weather[0].main);
    });
  }, []);

  return (
    <div>
      <Temperature>{`${temperature} °`}</Temperature>
      <Condition>{`${condition}`}</Condition>
      <Details />
    </div>
  );
};

export default Weather;
