import React from 'react'

import { Display } from './components'

export default ({ state }) => {
	return (
		<Display state={state}>
			<div className="background-values">
				{state.previousOperand}
				{state.operation}
			</div>

			<div className="front-values">
				{state.currentOperand}
			</div>
		</Display>
	)
}
