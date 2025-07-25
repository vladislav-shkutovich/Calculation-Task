import { createGlobalStyle } from 'styled-components'

import theme from './themes/themeColored'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: ${theme.font};
  }

  html, body {
    width: 100%;
    height: 100%;
  }

  body {
    & > #root {
      width: 100%;
      height: 100%;
    }
  }

  body {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  #root {
    display: flex;
    background: linear-gradient(to bottom, ${({ theme }) =>
			theme.colors.secondaryLight}, ${({ theme }) =>
	theme.colors.secondary});
  }
`
