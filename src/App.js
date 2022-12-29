import { useState, useEffect } from "react";

import "./App.css";
import TopButton from "./components/TopButton";
import Inputs from "./components/Inputs";
import TimeLocation from "./components/TimeLocation";
import Details from "./components/Details";
import Forecast from "./components/Forecast";

import getWeatherData from "./Utils/WeatherApi";

function App() {
  const [query, setQuery] = useState({ q: "New York" });
  const [units, setUnits] = useState("imperial");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      await getWeatherData({ ...query, units }).then((data) => {
        setWeather(data);
      });
    };
    fetchWeather();
  }, [query, units]);

  const formatBackground = () => {
    if (!weather) return "from-cyan-700 to-blue-700";
    const threshold = units === "metric" ? 20 : 60;
    if (weather.temp <= threshold) return "from-cyan-700 to-blue-700";

    return "from-yellow-700 to-orange-700";
  };

  return ( 
    <div
      className={`px-4 sm:px-20 mx-auto py-5 bg-gradient-to-br h-fit shadow-xl shadow-gray-400 ${formatBackground()} xl:px-80 `}
    >
      <TopButton setQuery={setQuery} />
      <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />

      {weather && (
        <div>
          <TimeLocation weather={weather} />
          <Details weather={weather} />
          <Forecast title="Hourly" items={weather.hourly} />
          <Forecast title="5-Day" items={weather.daily} />
        </div>
      )}
    </div>
  );
}

export default App;
