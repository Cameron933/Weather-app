import City from "./components/City"
import OtherCities from "./components/OtherCities"
import Forecast from "./components/Forecast"

const App = () => {
  return (
    <div>
      <City />
      <div>
        <OtherCities />
        <Forecast />
      </div>
    </div>
  );
}

export default App;
