import styled from 'styled-components';
import colors from 'common/colors';

export const ButtonStytled = styled.div`
	width: 120px;
	height: 40px;
	background-color: ${colors.themeColor1};
	border-radius: 5px;
	display: flex;
    align-items: center;
	justify-content: center;
	color: white;
	font-weight: 800;
	cursor: pointer;
`;