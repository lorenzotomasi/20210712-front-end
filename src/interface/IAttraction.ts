export interface IAttraction {
    id: number;
    name: string;
    parkId: number;
    description: string;
    averageTailTime: number;
    openTime: string;
    closeTime: string;
    minimumAccessAge: number;
}