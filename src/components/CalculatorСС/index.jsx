import React from 'react'

import { Card } from './components'

import Display from './Display'
import History from './History'
import Keypad from './Keypad'

export default ({ state, dispatch }) => {
	return (
		<Card>
			<Display state={state} />

			<Keypad dispatch={dispatch} />

			<History history={state?.history} />
		</Card>
	)
}
