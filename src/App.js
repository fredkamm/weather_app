import "./App.css";
import TopButton from './components/TopButton'
import Inputs from './components/Inputs'
import TimeLocation from './components/TimeLocation'
import Details from './components/Details'
import Forecast from './components/Forecast'

import getFormattedWeatherData from './Utils/WeatherApi'

function App() {

  const fetchWeather = async () => {
    const data = await getFormattedWeatherData({q: 'New York'});
    console.log(data);
  }
  fetchWeather();

  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400 ">
      <TopButton />
      <Inputs />
      <TimeLocation />
      <Details />
      <Forecast title='Hourly'/>
      <Forecast title='5-Day'/>
    </div>
  );
}

export default App;
