import axios from 'axios'

const API_KEY = 'aec183c604f51f81c2efe89a9f2f7bce'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`
  const promise = axios.get(url)

  return {
    type: FETCH_WEATHER,
    payload: promise
  }
}