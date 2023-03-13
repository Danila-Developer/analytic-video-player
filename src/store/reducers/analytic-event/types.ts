import {IAnalyticEvent} from "../../../models/IAnalyticEvent";

export interface IAnalyticEventState {
    analyticEvents: IAnalyticEvent[]
}

export enum AnalyticEventActionTypes {
    FETCH_EVENTS = 'FETCH_EVENTS',
    ADD_EVENTS = 'ADD_EVENTS'
}
export interface FetchEventsAction {
    type: AnalyticEventActionTypes.FETCH_EVENTS;
}

export interface AddEventsAction {
    type: AnalyticEventActionTypes.ADD_EVENTS,
    payload: IAnalyticEvent[];
}

export type AnalyticEventAction =
    FetchEventsAction |
    AddEventsAction