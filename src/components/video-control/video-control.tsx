import React, {FC, FormEvent, RefObject, useEffect, useState} from 'react';

import './video-control.css'

interface VideoControlProps {
    videoRef: RefObject<HTMLVideoElement>;
    currentTimeState: number;
}

const VideoControl: FC<VideoControlProps> = ({videoRef, currentTimeState}) => {
    const [videoProgress, setVideoProgress] = useState<number>(0)

    useEffect(() => {
        if (videoRef.current?.duration) {
            setVideoProgress((videoRef.current?.currentTime / videoRef.current?.duration)*100)
        }
    }, [currentTimeState])

    const changeRangeHandler = (e: FormEvent<HTMLInputElement>) => {
        if (videoRef.current) {
            videoRef.current.currentTime = (+e.currentTarget.value/100) * videoRef.current?.duration
            setVideoProgress(Number(e.currentTarget.value))
        }
    }

    function isPaused() {
        if (!videoRef.current) return true
        return videoRef.current.paused
    }

    return (
        <div className='video-control'>
            <div className='video-control__button'>
                {
                    isPaused() ?
                        <img onClick={() => videoRef.current?.play()} src={process.env.PUBLIC_URL + 'img/play.svg'} className='video-control__button__img'/>
                        :
                        <img onClick={() => videoRef.current?.pause()} src={process.env.PUBLIC_URL + 'img/pause.svg'} className='video-control__button__img'/>
                }
            </div>
            <input
                type='range'
                className='video-control__range'
                value={videoProgress}
                onChange={changeRangeHandler}
            />
        </div>
    );
};

export default VideoControl;