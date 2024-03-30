export class ForecastResponseDTO {
  current: {
    location: string;
    date: string;
    temp: number;
    wind: number;
    humidity: number;
    condition: {
      text: string;
      icon: string;
      code: number;
    };
  };
  four_futures: Array<typeof this.current>;
  rest_futures: typeof this.four_futures;
}
