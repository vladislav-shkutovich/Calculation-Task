import styled from 'styled-components'

export const StyledKeypad = styled.div`
	display: grid;

	max-width: 675px;
	max-height: 675px;
	align-items: center;
	justify-self: center;
	grid-row-gap: 10px;
	grid-column-gap: 10px;

	grid-area: ${({ historyIsShown }) => {
		return historyIsShown
			? '2 / 1 / 3 / 2'
			: '2 / 1 / 3 / 3'
	}};

	grid-template-rows: repeat(5, 80px);
	grid-template-columns: repeat(5, 1fr);

	justify-items: center;
	align-items: center;

	margin: 5px 5px 20px 20px;

	& > * {
		width: 100px;
		height: 80px;

		border: 2px solid ${({ theme }) => theme.colors.black};
		border-radius: 10%;
		color: ${({ theme }) => theme.colors.black};
		background: linear-gradient(
			to bottom,
			${({ theme }) => theme.colors.background},
			${({ theme }) => theme.colors.secondaryLight}
		);

		font-size: ${({ theme }) => theme.fontSizes[5]}px;

		& :hover {
			opacity: 80%;
			transform: translateY(1px);
		}

		& :active {
			transform: translateY(-1px);
		}
	}
`
