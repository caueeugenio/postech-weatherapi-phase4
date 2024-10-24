import axios from 'axios'

export default async function getWeather(state: string) {
    let result = null;
    let apiKey = `xxxxxxxxxxxxxxxxxxxxxxxxxxxx`
    let baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
  try {
    const response = await axios.get(`${baseUrl}?q=${state},BR&APPID=${apiKey}`);
    const data = response.data
    const temperatureMin = data.main.temp_min
    const temperatureMax = data.main.temp_max
    const wind = data.wind.speed
    const humidity = data.main.humidity
    const currentTemperature = data.main.temp
    const feelsLike = data.main.feels_like
    const pressure = data.main.pressure
    result = [
      temperatureMin,
      temperatureMax,
      wind,
      humidity,
      currentTemperature,
      feelsLike,
      pressure,
    ]
  } catch (error) {
    console.error(error)
  }
  return result
}
