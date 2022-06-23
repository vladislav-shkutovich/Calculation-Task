import styled from 'styled-components'

export const Card = styled.div`
	background: linear-gradient(
		to top,
		${({ theme }) => theme.colors.primary},
		${({ theme }) => theme.colors.secondary}
	);
	border: 2px solid ${({ theme }) => theme.colors.black};
	border-bottom: none;
	opacity: 1;

	width: 100%;
	min-height: 10%;

	font-size: ${({ theme }) => theme.fontSizes[4]}px;

	display: flex;
	justify-content: space-between;
	align-items: center;
`

export const Heading = styled.p`
	color: ${({ theme }) => theme.colors.black};
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

		color: ${({ theme }) => theme.colors.black};

		& :hover {
			text-decoration: underline;
			opacity: 80%;
		}
	}
`
