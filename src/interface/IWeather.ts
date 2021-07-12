export interface IWeather {
    date: Date;
    weather: "sunny" | "cloudy" | "rain";
    temperature: number;
}