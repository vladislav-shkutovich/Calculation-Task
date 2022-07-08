import React from 'react'

import { KeypadButton } from './components'

import { ACTIONS } from '@/constants'

export default ({ dispatch, digit }) => {
	// ! это всё нужно будет полностью переделать под Redux, но позже
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
