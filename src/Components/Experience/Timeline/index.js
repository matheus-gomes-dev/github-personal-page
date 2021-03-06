import React from 'react';

import TimelineEvent from './TimelineEvent';
import { TimelineStyled, YearMark } from './styles';

class Timeline extends React.Component {

    render() {
        return (
            <TimelineStyled>
                <YearMark>
                    <span>2020</span>
                </YearMark>
                <TimelineEvent
                    distanceToTopDesktop={50}
                    distanceToBottomDesktop={151}
                    distanceToTopMobile={50}
                    distanceToBottomMobile={40}
                    orientation="left"
                    company="BairesDev"
                    jobStartDate="Jul 2019"
                    jobEndDate="Presente"
                    isFirstEvent={true}
                />
                <YearMark>
                    <span>2019</span>
                </YearMark>
                <TimelineEvent
                    distanceToTopDesktop={50}
                    distanceToBottomDesktop={351}
                    distanceToTopMobile={50}
                    distanceToBottomMobile={130}
                    orientation="right"
                    company="Getty IO"
                    jobStartDate="Nov 2018"
                    jobEndDate="Jul 2019"
                    isFirstEvent={true}
                />
                <TimelineEvent
                    distanceToTopDesktop={251}
                    distanceToBottomDesktop={151}
                    distanceToTopMobile={140}
                    distanceToBottomMobile={40}
                    orientation="left"
                    company="Hypnobox"
                    jobStartDate="Ago 2018"
                    jobEndDate="Mai 2019"
                    isFirstEvent={true}
                />
                <YearMark>
                    <span>2018</span>
                </YearMark>
                <TimelineEvent
                    distanceToTopDesktop={50}
                    distanceToBottomDesktop={151}
                    distanceToTopMobile={50}
                    distanceToBottomMobile={40}
                    orientation="right"
                    company="Aktie now"
                    jobStartDate="Dez 2016"
                    jobEndDate="Ago 2018"
                />
                <YearMark>
                    <span>2016</span>
                </YearMark>
                <TimelineEvent
                    distanceToTopDesktop={50}
                    distanceToBottomDesktop={151}
                    distanceToTopMobile={50}
                    distanceToBottomMobile={40}
                    orientation="left"
                    company="CNPEM"
                    jobStartDate="Mar 2015"
                    jobEndDate="Set 2016"
                />
                <YearMark>
                    <span>2015</span>
                </YearMark>
                <TimelineEvent
                    distanceToTopDesktop={50}
                    distanceToBottomDesktop={151}
                    distanceToTopMobile={50}
                    distanceToBottomMobile={40}
                    orientation="right"
                    company="Wise"
                    jobStartDate="Ago 2014"
                    jobEndDate="Fev 2015"
                />
                <YearMark>
                    <span>2014</span>
                </YearMark>
                <TimelineEvent
                    distanceToTopDesktop={50}
                    distanceToBottomDesktop={151}
                    distanceToTopMobile={50}
                    distanceToBottomMobile={40}
                    orientation="left"
                    company="CNPQ"
                    jobStartDate="Jul 2012"
                    jobEndDate="Ago 2013"
                />
                <YearMark>
                    <span>2012</span>
                </YearMark>
            </TimelineStyled>
        )
    }
}

export default Timeline;
