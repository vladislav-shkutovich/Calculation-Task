import React from 'react'

import { StyledKeypadButton } from './styled'

import { ACTIONS } from '@/constants'

export default ({ dispatch, digit }) => {
	// ! это всё нужно будет полностью переделать под Redux, но позже
	return (
		<StyledKeypadButton
			onClick={() =>
				dispatch({
					type: ACTIONS.ADD_DIGIT,
					payload: { digit },
				})
			}>
			{digit}
		</StyledKeypadButton>
	)
}
