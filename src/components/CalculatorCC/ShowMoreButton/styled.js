import styled from 'styled-components'

export const StyledShowMoreButton = styled.button`
	border: none;
	background: none;
	color: ${({ theme }) => theme.colors.black};

	font-size: ${({ theme }) => theme.fontSizes[2]}px;

	& :hover {
		opacity: 80%;
		transform: translateY(1px);
	}

	& :active {
		transform: translateY(-1px);
	}
`
