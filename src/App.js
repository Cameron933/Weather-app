import City from './components/City';
import OtherCities from './components/OtherCities';
import Forecast from './components/Forecast';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <div className="card">
        <City />
        <div className="bottom">
          <OtherCities />
          <Forecast />
        </div>
      </div>
    </div>
  );
};

export default App;
