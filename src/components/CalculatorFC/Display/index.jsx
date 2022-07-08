import React from 'react'

import { StyledDisplay } from './styled'

export default ({ state }) => {
	return (
		<StyledDisplay state={state}>
			<div className="background-values">
				{state.previousOperand}
				{state.operation}
			</div>

			<div className="front-values">
				{state.currentOperand}
			</div>
		</StyledDisplay>
	)
}
