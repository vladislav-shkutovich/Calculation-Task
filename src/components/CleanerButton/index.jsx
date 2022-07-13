import React from 'react'

import { useDispatch } from 'react-redux'

import { StyledCleanerButton } from './styled'

import { ACTIONS } from '@/constants'

export default ({ type, name }) => {
	const dispatch = useDispatch()

	return (
		<StyledCleanerButton
			onClick={() =>
				dispatch({
					type: ACTIONS[type],
				})
			}>
			{name}
		</StyledCleanerButton>
	)
}
