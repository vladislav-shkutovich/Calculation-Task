import React from 'react'

// Styling
import { KeypadButton } from './components'

// Actions
import { ACTIONS } from '@/constants'

// * OperationButton component
export default ({ dispatch, operation }) => {
	let currentOperation

	switch (operation) {
		case 'CE':
			currentOperation = ACTIONS.CLEAR
			break
		case 'C':
			currentOperation = ACTIONS.DELETE_DIGIT
			break
		case '=':
			currentOperation = ACTIONS.EVALUATE
			break
		default:
			currentOperation = ACTIONS.CHOOSE_OPERATION
	}

	return (
		<KeypadButton
			onClick={() =>
				dispatch({
					type: currentOperation,
					payload: { operation },
				})
			}>
			{operation}
		</KeypadButton>
	)
}
