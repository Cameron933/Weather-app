import Condition from './components/Condition';
import Details from './components/Details';
import styled from 'styled-components';

const Temperature = styled.div`
  font-size: 5rem;
`;

const Weather = () => (
  <div>
    <Temperature>15.33 *</Temperature>
    <Condition />
    <Details />
  </div>
);
export default Weather;
