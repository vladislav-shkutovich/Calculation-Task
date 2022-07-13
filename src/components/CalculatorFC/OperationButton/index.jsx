import React from 'react'
import { useDispatch } from 'react-redux'
import {
	StyledAdditionalButton,
	StyledKeypadButton,
	StyledHistoryButton,
} from './styled'
import { ACTIONS } from '@/constants'

export default ({ operation }) => {
	const dispatch = useDispatch()

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
		case 'История':
			currentOperation = ACTIONS.TOGGLE_HISTORY
			break
		default:
			currentOperation = ACTIONS.CHOOSE_OPERATION
	}

	return operation === '+/-' || operation === '%' ? (
		<StyledAdditionalButton
			onClick={() =>
				dispatch({
					type: currentOperation,
					payload: { operation },
				})
			}>
			{operation}
		</StyledAdditionalButton>
	) : operation === 'History' || operation === 'История' ? (
		<StyledHistoryButton
			onClick={() =>
				dispatch({
					type: currentOperation,
					payload: { operation },
				})
			}>
			{operation}
		</StyledHistoryButton>
	) : (
		<StyledKeypadButton
			onClick={() =>
				dispatch({
					type: currentOperation,
					payload: { operation },
				})
			}>
			{operation}
		</StyledKeypadButton>
	)
}
