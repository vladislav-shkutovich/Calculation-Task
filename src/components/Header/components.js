import styled from 'styled-components'

export const Card = styled.div`
	background: #434343 0% 0% no-repeat padding-box;
	border: 1px solid ${({ theme }) => theme.colors.black};
	border-radius: 3px;
	opacity: 1;

	width: 100%;
	min-height: 10%;

	font-size: ${({ theme }) => theme.fontSizes[3]}px;

	display: flex;
	justify-content: space-between;
	align-items: center;
`

export const Heading = styled.p`
	color: ${({ theme }) => theme.colors.white};
	margin-left: 20px;
	margin-right: auto;
`

export const Anchor = styled.div`
	& > * {
		background: none;
		border: none;
		text-decoration: none;

		margin-right: 20px;

		font-size: ${({ theme }) => theme.fontSizes[3]}px;

		color: ${({ theme }) => theme.colors.white};

		& :hover {
			color: ${({ theme }) => theme.colors.secondaryLight};
		}
	}
`
