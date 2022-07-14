import styled from 'styled-components'

export const StyledCalculator = styled.div`
	display: grid;

	grid-template-rows: 1fr 6fr;
	grid-template-columns: 3fr 1fr;

	width: 100%;
	height: 90%;

	border: 2px solid ${({ theme }) => theme.colors.black};
	background-color: ${({ theme }) =>
		theme.colors.background};

	& * {
		padding: 10px;
	}
`
