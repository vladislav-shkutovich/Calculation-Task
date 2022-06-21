import React from 'react'

// Styling
import { Card } from './components'

// Components
import Display from './Display'
import History from './History'
import Keypad from './Keypad'

// * Main Calculator component
export default ({ state, dispatch }) => {
	return (
		<Card>
			<Display state={state} />

			<Keypad dispatch={dispatch} />

			<History state={state} />
		</Card>
	)
}
