export class CurrentResponseDTO {
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
}
