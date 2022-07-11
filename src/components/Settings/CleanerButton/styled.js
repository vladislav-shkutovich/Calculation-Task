import styled from 'styled-components'

export const StyledCleanerButton = styled.button`
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
