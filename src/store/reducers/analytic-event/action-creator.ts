import {AddEventsAction, AnalyticEventActionTypes, FetchEventsAction} from "./types";
import {IAnalyticEvent} from "../../../models/IAnalyticEvent";

export const analyticEventActionCreator = {
    fetchAnalyticEvents: (): FetchEventsAction =>
        ({type: AnalyticEventActionTypes.FETCH_EVENTS} ),

    addAnalyticEvents: (analyticEvents: IAnalyticEvent[]): AddEventsAction =>
        ({type: AnalyticEventActionTypes.ADD_EVENTS, payload: analyticEvents} )
}