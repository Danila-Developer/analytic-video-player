import {put, call, takeEvery} from 'redux-saga/effects'
import {AnalyticEventService} from "../service/AnalyticEventService";
import {IAnalyticEvent} from "../models/IAnalyticEvent";
import {analyticEventActionCreator} from "../store/reducers/analytic-event/action-creator";
import {AnalyticEventActionTypes} from "../store/reducers/analytic-event/types";

function* analyticEventWorker() {
    const analyticEvents: IAnalyticEvent[] = yield call(AnalyticEventService.fetchAnalyticEvents)
    yield put(analyticEventActionCreator.addAnalyticEvents(analyticEvents))
}

export function* analyticEventWatcher() {
    yield takeEvery(AnalyticEventActionTypes.FETCH_EVENTS, analyticEventWorker)
}