import styled from 'styled-components'

export const PageLayout = styled.div`
	width: 100%;
	max-height: 100%;
	height: 770px;

	max-width: 900px;

	padding: ${({ theme }) => theme.spaces[4]}px;
	margin: 0 auto;
`
export const Card = styled.div`
	width: 100%;
	height: 100%;

	background-color: ${({ theme }) => theme.colors.white};

	border-radius: 3px;

	display: flex;
	flex-direction: column;
	align-items: left;

	box-shadow: ${({ theme }) => theme.boxShadows[0]};

	padding: ${({ theme }) => theme.spaces[0]}px;
`
