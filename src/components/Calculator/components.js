import styled from 'styled-components'

export const Card = styled.div`
	display: grid;
	grid-template-rows: 1fr 6fr;
	grid-template-columns: 3fr 1fr;

	width: 100%;
	height: 90%;

	& * {
		padding: 10px;
	}
`

export const Display = styled.div`
	display: grid;
	grid-area: 1 / 1 / 2 / 2;

	margin: 20px 5px 5px 20px;

	border-bottom: 2px solid
		${({ theme }) => theme.colors.secondaryLight};

	justify-items: end;
	align-items: center;
	letter-spacing: 2px;

	font-size: ${({ theme }) => theme.fontSizes[4]}px;
`

export const Keypad = styled.div`
	display: grid;
	grid-area: 2 / 1 / 3 / 2;
	grid-template-rows: repeat(4, 1fr);
	grid-template-columns: repeat(5, 1fr);

	justify-items: center;
	align-items: center;

	margin: 5px 5px 20px 20px;
`

export const KeypadButton = styled.div`
	display: grid;
	justify-items: center;
	align-items: center;

	width: 60%;
	height: 60%;
	border: 2px solid
		${({ theme }) => theme.colors.secondaryLight};
	border-radius: 25%;

	font-size: ${({ theme }) => theme.fontSizes[5]}px;

	& :hover {
		opacity: 80%;
		transform: translateY(1px);
	}

	& :active {
		transform: translateY(-1px);
	}
`

export const History = styled.div`
	display: grid;
	grid-area: 1 / 2 / 3 / 3;
	align-content: flex-start;

	margin: 20px 20px 20px 5px;

	border-left: 2px solid
		${({ theme }) => theme.colors.secondaryLight};

	& > p {
		font-size: ${({ theme }) => theme.fontSizes[3]}px;
		text-align: center;
	}

	& > ul {
		max-height: 100%;
		list-style-type: none;
		overflow: auto;

		& ::-webkit-scrollbar {
			width: 4px;
			height: 4px;
			background-color: #f9f9fd;
		}

		& ::-webkit-scrollbar-thumb {
			border-radius: 3px;
			background-color: ${({ theme }) =>
				theme.colors.secondaryLight};
		}
	}
`
