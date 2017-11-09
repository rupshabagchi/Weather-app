import axios from 'axios';

const API_KEY="47643fa7b4c34e64cf9ea5407d0511d8";
const BASE_URL=`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const GET_WEATHER = 'GET_WEATHER'; //to keep consistency between reducer and action creator

export function getWeather(city) {
// note: action creators ALWAYS return an object with a type

  const URL = `${BASE_URL}&q=${city},US`;
  let request_promise = axios.get(URL);
  return {
    type: GET_WEATHER,
    payload: request_promise
  };
}
