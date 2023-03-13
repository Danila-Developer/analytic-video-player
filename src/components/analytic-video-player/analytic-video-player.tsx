import React, {FC, useEffect, useRef, useState} from 'react';

import './analytic-video-player.css'
import VideoControl from "../video-control/video-control";
import {VIDEO_URL} from "../../constants";
import AnalyticEventList from "../analytic-event-list/analytic-event-list";
import Canvas from "../canvas/canvas";
import {useTypedSelector} from "../../helpers/hooks/useTypedSelector";
import {IAnalyticEvent} from "../../models/IAnalyticEvent";

const AnalyticVideoPlayer:FC = () => {
    const [videoCurrentTime, setVideoCurrentTime] = useState<number>(0)
    const videoRef = useRef<HTMLVideoElement>(null)
    const {analyticEvents} = useTypedSelector(state => state.analyticEvent)
    const [currentAnalyticEvents, setCurrentAnalyticEvents] = useState<IAnalyticEvent[]>([])

    useEffect(() => {
        setCurrentAnalyticEvents(
            analyticEvents
                .filter(event =>
                    (event.timestamp <= videoCurrentTime*1000 && (event.timestamp + event.duration) >= videoCurrentTime*1000)
                )
        )
    }, [videoCurrentTime])


    const videoTimeUpdateHandler = (event: React.SyntheticEvent) => {
        let target = event.target as HTMLVideoElement
        setVideoCurrentTime(target.currentTime)
    }

    const togglePlayVideo = () => {
        if (videoRef.current) {
            videoRef.current.paused ?  videoRef.current.play() : videoRef.current.pause()
        }
    }

    return (
        <div className='analytic-video-player-wrapper'>
            <div className="analytic-video-player">
                <video
                    ref={videoRef}
                    onClick={togglePlayVideo}
                    onTimeUpdate={videoTimeUpdateHandler}
                    src={VIDEO_URL}
                    className='analytic-video-player__video'
                ></video>
                <VideoControl
                    currentTimeState={videoCurrentTime}
                    videoRef={videoRef}
                />
                <Canvas
                    analyticEvents={currentAnalyticEvents}
                    videoOriginalWidth={videoRef.current?.videoWidth}
                    videoOriginalHeight={videoRef.current?.videoHeight}
                    videoCurrentHeight={videoRef.current?.offsetHeight}
                    videoCurrentWidth={videoRef.current?.offsetWidth}
                />
            </div>
            <AnalyticEventList videoRef={videoRef} />
        </div>

    );
};

export default AnalyticVideoPlayer;