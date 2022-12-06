import { useState, useEffect } from 'react';
import styled from 'styled-components';
import getWeather from '../../../../utils/getWeather';

// const Container = styled.div`
//   font-size: 2rem;
//   font-weight: 500;
//   position: relative;

//   &::after {
//     content: '';
//     position: absolute;
//     bottom: -16px;
//     left: 50%;
//     transform: translateX(-50%);
//     width: 50%;
//     height: 2px;
//     background-color: white;
//   }
// `;

const Container = styled.div`
  font-size: 2rem;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const HorizontalRule = styled.div`
  width: 50%;
  margin-top: 8px;
  background-color: white;
  height: 2px;
`;

const Name = () => {
  const [cityName, setCityName] = useState();

  useEffect(() => {
    getWeather((data) => {
      setCityName(data.name);
    });
  }, []);

  return (
    <Container>
      <div>{cityName}</div>
      <HorizontalRule />
    </Container>
  );
};
export default Name;
