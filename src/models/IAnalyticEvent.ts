import {IAnalyticEventZone} from "./IAnalyticEventZone";

export interface IAnalyticEvent {
    id: number;
    timestamp: number;
    duration: number;
    zone: IAnalyticEventZone;
}