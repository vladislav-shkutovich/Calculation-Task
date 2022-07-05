import React from 'react'

import {
	AdditionalButton,
	KeypadButton,
	HistoryButton,
} from './components'

import { ACTIONS } from '@/constants'

export default ({ dispatch, operation }) => {
	let currentOperation

	switch (operation) {
		case '(':
			currentOperation = ACTIONS.ADD_BRACKET
			break
		case ')':
			currentOperation = ACTIONS.ADD_BRACKET
			break
		case 'CE':
			currentOperation = ACTIONS.CLEAR
			break
		case 'C':
			currentOperation = ACTIONS.DELETE_DIGIT
			break
		case '=':
			currentOperation = ACTIONS.EVALUATE
			break
		case '+/-':
			currentOperation = ACTIONS.TOGGLE_SIGN
			break
		case 'History':
			currentOperation = ACTIONS.TOGGLE_HISTORY
			break
		default:
			currentOperation = ACTIONS.CHOOSE_OPERATION
	}

	return operation === '+/-' || operation === '%' ? (
		<AdditionalButton
			onClick={() =>
				dispatch({
					type: currentOperation,
					payload: { operation },
				})
			}>
			{operation}
		</AdditionalButton>
	) : operation === 'History' ? (
		<HistoryButton
			onClick={() =>
				dispatch({
					type: currentOperation,
					payload: { operation },
				})
			}>
			{operation}
		</HistoryButton>
	) : (
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
