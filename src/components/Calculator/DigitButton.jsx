import React from 'react'

// Styling
import { KeypadButton } from './components'

// Actions
import { ACTIONS } from '@/constants'

// ! DigitButton component
export default ({ dispatch, digit }) => {
	return (
		<KeypadButton
			onClick={() =>
				dispatch({
					type: ACTIONS.ADD_DIGIT,
					payload: { digit },
				})
			}>
			{digit}
		</KeypadButton>
	)
}
