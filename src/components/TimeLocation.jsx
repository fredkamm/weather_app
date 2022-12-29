import React from "react";
import { localTime } from "../Utils/WeatherApi";

function TimeLocation({ weather: { dt, timezone, name, country } }) {
  return (
    <div>
      <div className="px-12 sm:flex items-center justify-center my-6">
        <p className="text-white text-xl font-extralight">{localTime(dt, timezone)}</p>
      </div>
      <div className="flex items-center justify-center my-3">
        <p className="text-white text-3xl font-medium">{`${name}, ${country}`}</p>
      </div>
    </div>
  );
}

export default TimeLocation;
