const KEY = "16915ed41d608af251c5d1ca19c246be";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

const weatherData = (infoType, searchParams) => {
  const url = new URL(BASE_URL + "/" + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: KEY });

  return fetch(url)
    .then((res) => res.json())
    .then((data) => data);
};

export default weatherData;
