import React, { useReducer } from 'react'

// Styling
import { Card } from './components'

// Components
import Display from './Display'
import History from './History'
import Keypad from './Keypad'

// Actions
import { ACTIONS } from '@/constants'

export default () => {
	function reducer(state, { type, payload }) {
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
				// for the
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

	function evaluate({
		currentOperand,
		previousOperand,
		operation,
	}) {
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

		return computation.toString()
	}

	const [
		{ currentOperand, previousOperand, operation },
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

			<History />
		</Card>
	)
}
