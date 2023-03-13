import {IAnalyticEvent} from "../models/IAnalyticEvent";
import axios from "axios";
import {ANALYTIC_URL} from "../constants";

export class AnalyticEventService {
    static async fetchAnalyticEvents(): Promise<IAnalyticEvent[]> {
        const analyticEventsResponse = await axios.get<IAnalyticEvent[]>(ANALYTIC_URL)
        return analyticEventsResponse.data
    }
}