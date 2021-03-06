import styled from 'styled-components';

import colors from 'common/colors';
import definitions from 'common/definitions';

export const MenuStyled = styled.div`
	z-index: 10;
    @media (min-width: ${definitions.DESKTOP_MIN_WIDTH}px) {
        display: none;
    }
  	@media (max-width: ${definitions.DESKTOP_MIN_WIDTH - 1}px) {
		position: fixed;
		width: 100%;
		bottom: 0px;
		display: flex;
		align-item: center;
		justify-content: space-between;
  	}
`;
