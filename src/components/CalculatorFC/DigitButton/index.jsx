import React from 'react'
import { useDispatch } from 'react-redux'
import { StyledKeypadButton } from './styled'
import { ACTIONS } from '@/constants'

export default ({ digit }) => {
	const dispatch = useDispatch()

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
