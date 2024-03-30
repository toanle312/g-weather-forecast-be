import { Controller, Get, ParseIntPipe, Query } from '@nestjs/common';
import { WeatherService } from './weather.service';
import { SkipThrottle } from '@nestjs/throttler';

@SkipThrottle()
@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @SkipThrottle({ default: false })
  @Get('current')
  getCurrentWeather(@Query('city') city: string) {
    return this.weatherService.getCurrentWeather(city);
  }

  @SkipThrottle({ default: false })
  @Get('forecast')
  getForecastWeather(
    @Query('city') city: string,
    @Query('days', ParseIntPipe) days: number,
  ) {
    if (days === 0) return this.weatherService.getCurrentWeather(city);

    return this.weatherService.getForecastWeather(city, days);
  }
}
