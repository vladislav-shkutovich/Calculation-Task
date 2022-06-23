import React from 'react'

import { Card } from './components'

import Display from './Display'
import History from './History'
import Keypad from './Keypad'

export default class extends React.Component {
	render(props) {
		const { state, dispatch } = this.props

		return (
			<Card>
				<Display state={state} />

				<Keypad dispatch={dispatch} />

				<History history={state?.history} />
			</Card>
		)
	}
}
