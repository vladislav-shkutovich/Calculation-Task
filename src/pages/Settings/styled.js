import styled from 'styled-components'

// todo убрать лишние пробелы во всех стилях
export const StyledSettings = styled.div`
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
