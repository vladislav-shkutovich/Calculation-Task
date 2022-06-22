import React from 'react'

import { KeypadButton } from './components'

import { ACTIONS } from '@/constants'

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
