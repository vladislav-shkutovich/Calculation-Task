import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { store } from '@/store'

import Application from '@/App'

import './helpers/i18n'

ReactDOM.render(
	<Provider store={store}>
		<Application />
	</Provider>,
	document.getElementById('root'),
)
