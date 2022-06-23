import styled from 'styled-components'

export const Message = styled.p`
	display: grid;
	grid-area: 1 / 2 / 3 / 3;
	align-content: flex-start;
	margin: 20px 20px 20px 5px;
	padding-left: 30px;

	font-size: ${({ theme }) => theme.fontSizes[3]}px;

	color: ${({ theme }) => theme.colors.black};

	border-left: 2px solid
		${({ theme }) => theme.colors.black};
`
