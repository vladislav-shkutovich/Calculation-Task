import styled from 'styled-components'

export const Card = styled.div`
	display: flex;
	flex-direction: column;

	padding: 30px 50px;

	width: 100%;
	height: 90%;

	color: ${({ theme }) => theme.colors.black};
	border: 2px solid ${({ theme }) => theme.colors.black};
	background-color: ${({ theme }) =>
		theme.colors.background};

	& * {
		padding: 10px;
		max-width: 220px;
		text-align: left;
		border-radius: 5px;
	}
`
export const Heading = styled.div`
	font-size: ${({ theme }) => theme.fontSizes[5]}px;
`
export const Description = styled.div`
	font-size: ${({ theme }) => theme.fontSizes[2]}px;
	padding: 5px;
`

export const ThemeSelector = styled.select`
	height: 50px;
	font-size: ${({ theme }) => theme.fontSizes[2]}px;

	border: 2px solid ${({ theme }) => theme.colors.black};
	color: ${({ theme }) => theme.colors.black};
	background: linear-gradient(
		to bottom,
		${({ theme }) => theme.colors.background},
		${({ theme }) => theme.colors.secondaryLight}
	);

	margin-top: 5px;

	& > option {
		color: ${({ theme }) => theme.colors.black};
		background-color: ${({ theme }) =>
			theme.colors.secondaryLight};
	}
`

export const HistoryCleaner = styled.button`
	margin-top: 15px;
	font-size: ${({ theme }) => theme.fontSizes[2]}px;

	border: 2px solid ${({ theme }) => theme.colors.black};
	color: ${({ theme }) => theme.colors.black};
	background: linear-gradient(
		to bottom,
		${({ theme }) => theme.colors.background},
		${({ theme }) => theme.colors.secondaryLight}
	);

	& :hover {
		opacity: 80%;
		transform: translateY(1px);
	}

	& :active {
		transform: translateY(-1px);
	}
`
