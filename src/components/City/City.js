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
  const [data, setData] = useState();

  useEffect(() => {
    getWeather(setData);
  }, []);

  return (
    <Container>
      {data && (
        <React.Fragment>
          <Weather
            temperature={data.main.temp}
            condition={data.weather[0].main}
            wind={data.wind.speed}
            humidity={data.main.humidity}
          />
          <Name cityName={data.name} />
        </React.Fragment>
      )}
      <Strip />
    </Container>
  );
};

export default City;
