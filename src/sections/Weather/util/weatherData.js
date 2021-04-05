import { NIGHT, EVENING, AFTERNOON, MORNING } from '../types/weatherTimePeriod';

export default (list, timePeriod) => {
  const temperatureList = [];
  const pressureList = [];
  const humidityList = [];

  let temperatureSum = 0;
  let pressureSum = 0;
  let humiditySum = 0;

  const addToLists = (temp, pressure, humidity) => {
    temperatureList.push(temp);
    pressureList.push(pressure);
    humidityList.push(humidity);

    temperatureSum += temp;
    pressureSum += pressure;
    humiditySum += humidity;
  };

  const checkTimePeriod = (filterName, forecastDate) => {
    const hours = new Date(forecastDate).getHours();

    switch (filterName) {
      case MORNING:
        return hours >= 6 && hours < 12;

      case AFTERNOON:
        return hours >= 12 && hours < 18;

      case EVENING:
        return hours >= 18;

      case NIGHT:
        return hours >= 0 && hours < 6;

      default:
        return true;
    }
  };

  list.forEach((weather) => {
    if (checkTimePeriod(timePeriod, weather.dt_txt)) {
      addToLists(weather.main.temp, weather.main.pressure, weather.main.humidity);
    }
  });

  const temperatureAverage = (temperatureSum / temperatureList.length).toFixed(2);
  const pressureAverage = (pressureSum / pressureList.length).toFixed(2);
  const humidityAverage = (humiditySum / humidityList.length).toFixed(2);

  return [
    temperatureList,
    pressureList,
    humidityList,
    temperatureAverage,
    pressureAverage,
    humidityAverage,
  ];
};
