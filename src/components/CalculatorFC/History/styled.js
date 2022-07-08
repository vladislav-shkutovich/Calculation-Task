import styled from 'styled-components'

export const StyledHistory = styled.div`
	display: grid;
	/* display: none; */
	grid-area: 1 / 2 / 3 / 3;
	align-content: flex-start;
	margin: 20px 20px 20px 5px;

	color: ${({ theme }) => theme.colors.black};

	border-left: 2px solid
		${({ theme }) => theme.colors.black};

	& > p {
		font-size: ${({ theme }) => theme.fontSizes[3]}px;
		text-align: center;
	}

	& > ul {
		max-height: 100%;
		list-style-type: none;
		overflow: auto;

		font-size: ${({ theme }) => theme.fontSizes[2]}px;

		& ::-webkit-scrollbar {
			width: 4px;
			height: 4px;
			background-color: #f9f9fd;
		}

		& ::-webkit-scrollbar-thumb {
			border-radius: 5px;
			border: 1px solid ${({ theme }) => theme.colors.black};
			background-color: ${({ theme }) =>
				theme.colors.primary};
		}

		& ::-webkit-scrollbar-track {
			background-color: ${({ theme }) =>
				theme.colors.secondaryLight};
		}

		& > li {
			margin-bottom: 20px;
		}
	}
`
