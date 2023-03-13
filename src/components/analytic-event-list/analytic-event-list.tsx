import React, {FC, RefObject, useEffect} from 'react';
import './analytic-event-list.css'
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../../helpers/hooks/useTypedSelector";
import {analyticEventActionCreator} from "../../store/reducers/analytic-event/action-creator";
import {timestampToTime} from "../../helpers/utils/timestampToTime";

interface AnalyticEventProps {
    timestamp: number;
    videoRef: RefObject<HTMLVideoElement>;
}

interface AnalyticEventListProps {
    videoRef: RefObject<HTMLVideoElement>;
}

const AnalyticEvent: FC<AnalyticEventProps> = ({timestamp, videoRef}) => {
    const clickHandler = () => {
        if (videoRef.current) videoRef.current.currentTime = timestamp / 1000
    }

    return (
        <div
            className='analytic-event-list__event'
            data-hover={timestampToTime(timestamp)}
            onClick={clickHandler}
        >
            {timestampToTime(timestamp)}
        </div>
    )
}

const AnalyticEventList:FC<AnalyticEventListProps> = ({videoRef}) => {
    const {analyticEvents} = useTypedSelector(store => store.analyticEvent)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(analyticEventActionCreator.fetchAnalyticEvents())
    }, [])

    return (
        <div className='analytic-event-list'>
            {
                analyticEvents
                    .sort((a, b) => a.timestamp < b.timestamp ? -1 : 1)
                    .map(event =>
                        <AnalyticEvent
                            key={event.id}
                            timestamp={event.timestamp}
                            videoRef={videoRef}
                        />
                    )
            }

        </div>
    );
};

export default AnalyticEventList;