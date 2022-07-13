import React from 'react'

import { useSelector } from 'react-redux'

import { StyledDisplay } from './styled'

export default () => {
	const store = useSelector(store => store)

	return (
		<StyledDisplay state={store}>
			<div className="background-values">
				{store?.previousOperand}
				{store?.operation}
			</div>

			<div className="front-values">
				{store?.currentOperand}
			</div>
		</StyledDisplay>
	)
}
