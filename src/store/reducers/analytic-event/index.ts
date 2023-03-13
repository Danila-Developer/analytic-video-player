import {AnalyticEventAction, AnalyticEventActionTypes, IAnalyticEventState} from "./types";

const initialState: IAnalyticEventState = {
    analyticEvents: []
}

export function analyticEventReducer(state = initialState, action: AnalyticEventAction) {
    switch (action.type) {
        case AnalyticEventActionTypes.ADD_EVENTS:
            return {
                ...state,
                analyticEvents: action.payload
            }
        default:
            return state
    }
}