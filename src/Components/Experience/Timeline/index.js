import React from 'react';

import TimelineEvent from './TimelineEvent';
import { TimelineStyled, YearMark } from './style';

class Timeline extends React.Component {

    render() {
        return (
            <TimelineStyled>
                <YearMark>
                    <span>2020</span>
                </YearMark>
                <TimelineEvent distanceToTop={50} distanceToBottom={351} orientation="left" />
                <TimelineEvent distanceToTop={250} distanceToBottom={150} orientation="right" />
                <YearMark>
                    <span>2019</span>
                </YearMark>
            </TimelineStyled>
        )
    }
}

export default Timeline;
