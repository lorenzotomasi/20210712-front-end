import { IAttraction } from "./IAttraction";
import { IWeather } from "./IWeather";

export interface IPark {
    id: number;
    name: string;
    attractionList: IAttraction[];
    description: string;
    openTime: string;
    closeTime: string;
    weather: IWeather[],
    parkingInformation: string,
}