import React from 'react'

import { Card } from './components'

import ErrorBoundary from '@/ErrorBoundary'

import Display from './Display'
import History from './History'
import Keypad from './Keypad'

export default class extends React.Component {
	render(props) {
		const { state, dispatch } = this.props

		// todo это всё собрать в pages
		return (
			<Card>
				<Display state={state} />

				<Keypad dispatch={dispatch} state={state} />

				<ErrorBoundary>
					<History
						history={state?.history}
						historyIsShown={state.historyIsShown}
					/>
				</ErrorBoundary>
			</Card>
		)
	}
}
