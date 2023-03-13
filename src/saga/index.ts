import {all} from 'redux-saga/effects';
import {analyticEventWatcher} from "./analytic-event-saga";

export default function* rootWatcher() {
    yield all([analyticEventWatcher()])
}