import React, { useReducer } from 'react'

// Styling
import { Card } from './components'

// Components
import Display from './Display'
import History from './History'
import Keypad from './Keypad'

// Helpers
import { reducer } from '@/helpers'

// * Main Calculator component
export default () => {
	const [
		{ currentOperand, previousOperand, operation, history },
		dispatch,
	] = useReducer(reducer, {})

	return (
		<Card>
			<Display
				userInputs={{
					currentOperand,
					previousOperand,
					operation,
				}}
			/>

			<Keypad dispatch={dispatch} />

			<History history={history} />
		</Card>
	)
}
