import {IAnalyticEventZone} from "../../models/IAnalyticEventZone";

export interface VideoParams {
    videoCurrentHeight?: number;
    videoCurrentWidth?: number;
    videoOriginalHeight?: number;
    videoOriginalWidth?: number;
}

export function normalizeZone(analyticEventsZone: IAnalyticEventZone,
                              videoParams: VideoParams): IAnalyticEventZone | undefined {
    if (!videoParams.videoCurrentWidth   ||
        !videoParams.videoOriginalHeight ||
        !videoParams.videoOriginalWidth  ||
        !videoParams.videoCurrentHeight) return

    const normalizeVerticalRatio = videoParams.videoCurrentHeight / videoParams.videoOriginalHeight;
    const normalizeHorizontalRatio = videoParams.videoCurrentWidth / videoParams.videoOriginalWidth;

    return {
        top: analyticEventsZone.top * normalizeVerticalRatio,
        left: analyticEventsZone.left * normalizeHorizontalRatio,
        width: analyticEventsZone.width * normalizeHorizontalRatio,
        height: analyticEventsZone.height * normalizeVerticalRatio
    }
}