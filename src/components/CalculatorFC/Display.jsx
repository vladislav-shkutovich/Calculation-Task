import React from 'react'

// Styling
import { Display } from './components'

// * Display component
export default ({ state }) => {
	return (
		<Display>
			{state.previousOperand}
			{state.operation}
			{state.currentOperand}
		</Display>
	)
}
