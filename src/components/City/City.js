import React, { useState, useEffect } from 'react';
import Weather from './components/Weather';
import Name from './components/Name';
import styled from 'styled-components';
import getWeather from '../../utils/getWeather';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 64px 96px;
  background-image: url(https://i.imgur.com/GhQZhaO.jpg);
  background-size: cover;
  color: white;
  position: relative;
`;

const Strip = styled.div`
  height: 24px;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;

const City = () => {
  const [temperature, setTemperature] = useState('00.0');
  const [condition, setCondition] = useState('...');
  const [humidity, setHumidity] = useState();
  const [wind, setWind] = useState();
  const [cityName, setCityName] = useState();

  useEffect(() => {
    getWeather((data) => {
      setTemperature(data.main.temp);
      setCondition(data.weather[0].main);
      setHumidity(data.main.humidity);
      setWind(data.wind.speed);
      setCityName(data.name);
    });
  }, []);

  return (
    <Container>
      <Weather temperature={temperature} condition={condition} wind={wind} humidity={humidity} />
      <Name cityName={cityName} />
      <Strip />
    </Container>
  );
};

export default City;
