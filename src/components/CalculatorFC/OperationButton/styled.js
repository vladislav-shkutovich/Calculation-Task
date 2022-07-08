import styled from 'styled-components'

export const StyledKeypadButton = styled.button``

export const StyledAdditionalButton = styled.button`
	margin-left: 220%;
`

export const StyledHistoryButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-left: 220%;

	font-size: ${({ theme }) => theme.fontSizes[3]}px;
`
