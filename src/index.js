import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import Application from '@/App'

import theme from '@/theme'
import GlobalStyles from '@/globalStyles'

ReactDOM.render(
	<ThemeProvider theme={theme}>
		<BrowserRouter>
			<Application />
			<GlobalStyles />
		</BrowserRouter>
	</ThemeProvider>,
	document.getElementById('root'),
)
