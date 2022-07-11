import styled from 'styled-components'

export const StyledDropdown = styled.select`
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
