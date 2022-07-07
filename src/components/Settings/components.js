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
export const Description = styled.p`
	font-size: ${({ theme }) => theme.fontSizes[2]}px;
	padding: 5px;
`

export const Dropdown = styled.select`
	height: 50px;
	font-size: ${({ theme }) => theme.fontSizes[2]}px;

	border: 2px solid ${({ theme }) => theme.colors.black};
	color: ${({ theme }) => theme.colors.black};
	background: linear-gradient(
		to left,
		${({ theme }) => theme.colors.background},
		${({ theme }) => theme.colors.secondaryLight}
	);

	margin: 5px 0 10px 0;

	& > option {
		color: ${({ theme }) => theme.colors.black};
		background-color: ${({ theme }) =>
			theme.colors.secondaryLight};
	}
`

export const CleanerButton = styled.button`
	margin-top: 10px;
	font-size: ${({ theme }) => theme.fontSizes[2]}px;

	border: 2px solid ${({ theme }) => theme.colors.black};
	color: ${({ theme }) => theme.colors.black};
	background: linear-gradient(
		to bottom left,
		${({ theme }) => theme.colors.background},
		${({ theme }) => theme.colors.secondary}
	);

	& :hover {
		opacity: 80%;
		transform: translateY(1px);
	}

	& :active {
		transform: translateY(-1px);
	}
`
