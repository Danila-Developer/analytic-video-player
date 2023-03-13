import React, {FC} from 'react';
import './canvas.css'
import {IAnalyticEvent} from "../../models/IAnalyticEvent";
import {IAnalyticEventZone} from "../../models/IAnalyticEventZone";
import {normalizeZone} from "../../helpers/utils/normalizeZone";

interface CanvasProps {
    videoOriginalWidth?: number;
    videoOriginalHeight?: number;
    videoCurrentWidth?: number;
    videoCurrentHeight?: number;
    analyticEvents: IAnalyticEvent[];
}

interface CanvasEventZoneProps {
    normalizedZone?: IAnalyticEventZone;
}

const CanvasEventZone: FC<CanvasEventZoneProps> = ({normalizedZone}) => {
    return (
        <div style={normalizedZone} className='canvas__event'></div>
    )
}

const Canvas: FC<CanvasProps> = ({
                                     videoCurrentHeight,
                                     videoCurrentWidth,
                                     videoOriginalHeight,
                                     videoOriginalWidth,
                                     analyticEvents
}) => {
    return (
        <div className='canvas'>
            {
                analyticEvents.map(analyticEvent =>
                    <CanvasEventZone
                        key={analyticEvent.id}
                        normalizedZone={
                        normalizeZone(
                            analyticEvent.zone,
                            {
                                videoOriginalHeight,
                                videoCurrentHeight,
                                videoOriginalWidth,
                                videoCurrentWidth
                            })
                        }
                    />
                )
            }
        </div>
    );
};

export default Canvas;