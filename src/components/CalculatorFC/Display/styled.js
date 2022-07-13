import styled from 'styled-components'

export const StyledDisplay = styled.div`
	display: grid;
	height: 120px;

	grid-area: ${({ state }) => {
		return state?.historyIsShown
			? '1 / 1 / 2 / 2'
			: '1 / 1 / 2 / 3'
	}};

	margin: 20px 15px 5px 20px;

	color: ${({ theme }) => theme.colors.black};
	border-bottom: 2px solid
		${({ theme }) => theme.colors.black};

	justify-items: end;
	align-items: center;
	letter-spacing: 2px;

	& > .front-values {
		font-size: ${({ theme }) => theme.fontSizes[5]}px;
	}

	& > .background-values {
		font-size: ${({ theme }) => theme.fontSizes[3]}px;
	}
`
