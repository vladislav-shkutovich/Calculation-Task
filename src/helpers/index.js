// @todo: add some helpers

import { ACTIONS } from '@/constants'
import { evaluate as mathEvaluate } from 'mathjs'

// ! fix: brackets not working with this logic
function evaluate({
	currentOperand,
	previousOperand,
	operation,
}) {
	// case including brackets
	// TODO доработать логику вычисления со скобками
	if (previousOperand.includes('('))
		return mathEvaluate(
			(previousOperand || '') +
				(operation || '') +
				(currentOperand || ''),
		)

	console.log(previousOperand + operation + currentOperand)

	// case without brackets
	const prev = parseFloat(previousOperand)
	const cur = parseFloat(currentOperand)

	if (isNaN(prev) || isNaN(cur)) return ''

	let computation = ''

	switch (operation) {
		case '+':
			computation = prev + cur
			break
		case '-':
			computation = prev - cur
			break
		case '*':
			computation = prev * cur
			break
		case '/':
			computation = prev / cur
			break
	}

	return Number.isInteger(computation)
		? computation.toString()
		: computation.toFixed(3).toString()
}

export function reducer(state, { type, payload }) {
	switch (type) {
		case ACTIONS.ADD_DIGIT:
			// Validation guards
			if (state.overwrite === true) {
				return {
					...state,
					currentOperand: payload.digit,
					overwrite: false,
				}
			}
			if (
				payload.digit === '0' &&
				state.currentOperand === '0'
			)
				return state
			if (
				payload.digit === '.' &&
				state.currentOperand?.includes('.')
			)
				return state

			return {
				...state,
				currentOperand: `${state.currentOperand || ''}${
					payload.digit
				}`,
			}

		case ACTIONS.CHOOSE_OPERATION:
			if (
				state.currentOperand == null &&
				state.previousOperand == null
			)
				return state

			if (state.currentOperand == null) {
				return {
					...state,
					operation: payload.operation,
				}
			}

			if (state.previousOperand == null)
				return {
					...state,
					operation: payload.operation,
					previousOperand: state.currentOperand,
					currentOperand: null,
				}

			return {
				...state,
				previousOperand: evaluate(state),
				operation: payload.operation,
				currentOperand: null,
			}

		case ACTIONS.DELETE_DIGIT:
			if (state.overwrite)
				return {
					...state,
					overwrite: false,
					currentOperand: null,
				}
			if (state.currentOperand == null) return state
			if (state.currentOperand.length === 1)
				return {
					...state,
					currentOperand: null,
				}
			return {
				...state,
				currentOperand: state.currentOperand.slice(0, -1),
			}

		case ACTIONS.CLEAR:
			return {}

		case ACTIONS.EVALUATE:
			if (
				state.operation == null ||
				state.previousOperand == null ||
				state.currentOperand == null
			) {
				return state
			}

			return {
				...state,
				overwrite: true,
				previousOperand: null,
				operation: null,
				currentOperand: evaluate(state),
			}
	}
}
