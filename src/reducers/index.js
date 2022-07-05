import { ACTIONS } from '@/constants'
import { evaluate } from '@/helpers'

export function reducer(state, { type, payload }) {
	switch (type) {
		case ACTIONS.TOGGLE_HISTORY:
			return {
				...state,
				historyIsShown: !state.historyIsShown,
			}

		case ACTIONS.ADD_DIGIT:
			// to overwrite '0' digit
			if (
				state.currentOperand === '0' &&
				state.currentOperand.length === 1 &&
				payload.digit !== '.'
			)
				return {
					...state,
					currentOperand: payload.digit,
				}

			/*
			if (
				state.currentOperand === '(' &&
				state.currentOperand.length === 1
			)
				return {
					...state,
					currentOperand: '(' + payload.digit,
				}
			*/

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

		/*
		case ACTIONS.ADD_BRACKET:
			console.log('add-bracket-action')
			if (payload.operation === '(')
				return {
					...state,
					currentOperand: state.currentOperand
						? '(' + state.currentOperand
						: '(',
				}
			if (
				payload.operation === ')' &&
				!state.previousOperand?.includes('(')
			)
				return state

			if (
				payload.operation === ')' &&
				state.previousOperand.includes('(')
			)
				return {
					...state,
					currentOperand: state.previousOperand + ')',
				}
			return state
		*/

		case ACTIONS.CHOOSE_OPERATION:
			if (
				state.currentOperand == null &&
				state.previousOperand == null &&
				payload.operation === '-'
			)
				return {
					...state,
					operation: payload.operation,
					previousOperand: 0,
					currentOperand: state.currentOperand,
				}
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

			/*
			// todo CHANGE LOGIC HERE
			if (state.previousOperand.includes('('))
				return {
					...state,
					operation: payload.operation,
					previousOperand: state.currentOperand,
					currentOperand: null,
					overwrite: true,
				}
			*/

			return {
				...state,
				previousOperand:
					state.previousOperand +
					state.operation +
					state.currentOperand,
				operation: payload.operation,
				currentOperand: evaluate(state).formattedResult,
				overwrite: true,
			}

		case ACTIONS.DELETE_DIGIT:
			if (state.overwrite)
				return {
					...state,
					overwrite: false,
					currentOperand: null,
				}
			if (state.currentOperand == null) return state

			if (
				state.currentOperand.length === 2 &&
				!Number(state.currentOperand[0])
			)
				return {
					...state,
					currentOperand: null,
				}

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
			return {
				...state,
				overwrite: true,
				previousOperand: null,
				operation: null,
				currentOperand: null,
			}

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
				currentOperand: evaluate(state).formattedResult,
				history: evaluate(state).updatedHistory,
			}

		case ACTIONS.CLEAR_HISTORY:
			return {
				...state,
				history: [],
			}

		case ACTIONS.CLEAR_HISTORY_AND_RESULT:
			return {
				...state,
				overwrite: true,
				previousOperand: null,
				operation: null,
				currentOperand: null,
				history: [],
			}

		case ACTIONS.SELECT_THEME:
			return {
				...state,
				selectedTheme: payload,
			}

		case ACTIONS.TOGGLE_SIGN:
			if (state.currentOperand == null) {
				return state
			}
			return {
				...state,
				currentOperand: String(0 - state.currentOperand),
			}
	}
}
