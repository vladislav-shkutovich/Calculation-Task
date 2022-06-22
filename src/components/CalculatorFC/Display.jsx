import React from 'react'

import { Display } from './components'

export default ({ state }) => {
	return (
		<Display>
			{state.previousOperand}
			{state.operation}
			{state.currentOperand}
		</Display>
	)
}
