import axios from 'axios';
import { Injectable } from '@nestjs/common';
import { CurrentResponseDTO } from 'src/dto/current-response-dto';
import { ForecastResponseDTO } from 'src/dto/forecast-response.dto';
import { env } from '@/configs/environment';

@Injectable()
export class WeatherService {
  async getCurrentWeather(city: string) {
    const response = await axios.get(
      `https://api.weatherapi.com/v1/current.json?key=${env.API_KEY}&q=${city}&aqi=no`,
    );
    return {
      location: response.data.location.name,
      date: response.data.current.last_updated.split(' ')[0],
      temp: response.data.current.temp_c,
      wind: response.data.current.wind_mph,
      humidity: response.data.current.humidity,
      condition: response.data.current.condition,
    } as CurrentResponseDTO;
  }

  async getForecastWeather(city: string, days: number) {
    const response = await axios.get(
      `https://api.weatherapi.com/v1/forecast.json?key=${env.API_KEY}&q=${city}&days=${days}&aqi=no&alerts=no`,
    );
    const currentData = response.data.forecast.forecastday.shift();
    return {
      current: {
        location: response.data.location.name,
        date: currentData.date,
        temp: currentData.day.avgtemp_c,
        wind: currentData.day.maxwind_mph,
        humidity: currentData.day.avghumidity,
        condition: currentData.day.condition,
      },
      four_futures: response.data.forecast.forecastday.splice(0, 4).map((w) => {
        return {
          location: response.data.location.name,
          date: w.date,
          temp: w.day.avgtemp_c,
          wind: w.day.maxwind_mph,
          humidity: w.day.avghumidity,
          condition: w.day.condition,
        };
      }),
      rest_futures: response.data.forecast.forecastday.map((w) => {
        return {
          location: response.data.location.name,
          date: w.date,
          temp: w.day.avgtemp_c,
          wind: w.day.maxwind_mph,
          humidity: w.day.avghumidity,
          condition: w.day.condition,
        };
      }),
    } as ForecastResponseDTO;
  }
}
