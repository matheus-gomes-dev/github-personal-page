import styled, { keyframes } from 'styled-components';
import colors from 'common/colors';

const animateVerticalLine = keyframes`
  	0% {
    	height: 0px;
  	}
  	100% {
    	height: 100%;
  	}
`;

export const TimelineEventStyled = styled.div`
    position: relative;
    .left-event {
        border: 1px solid yellow;
        border-radius: 100%;
        width: 100px;
        height: 100px;
        position: relative;
        cursor: pointer;
    }
    .right-event {
        border: 1px solid yellow;
        border-radius: 100%;
        width: 100px;
        height: 100px;
        position: relative;
        left: calc(100% - 100px);
        cursor: pointer;
    }
    .left-horizontal-line {
        position: absolute;
        background-color: ${colors.borders};
        height: 3px;
        width: calc(50% - 100px);
        top: 50px;
        left: 100px;
    }
    .right-horizontal-line {
        position: absolute;
        background-color: ${colors.borders};
        height: 3px;
        width: calc(50% - 100px);
        top: 50px;
        left: 50%;
    }
    .vertical-line {
        position: absolute;
        background-color: ${colors.borders};
        height: 102px;
        width: 3px;
        top: 0px;
        left: 50%;
    }
    .top-vertical-line-animated {
        transform: rotatex(180deg);
        transform-origin: top;
    }
`