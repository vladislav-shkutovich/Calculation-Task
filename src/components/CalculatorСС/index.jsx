import React from 'react'

// Styling
import { Card } from './components'

// Components
import Display from './Display'
import History from './History'
import Keypad from './Keypad'

// // Helpers
// import { reducer } from '@/helpers'

// * Main Calculator component
export default ({ state, dispatch }) => {
	// console.log(state)

	return (
		<Card>
			<Display state={state} />

			<Keypad dispatch={dispatch} />

			<History state={state} />
		</Card>
	)
}
