import React from 'react'

import { StyledCleanerButton } from './styled'

import { ACTIONS } from '@/constants'

export default ({ type, name, dispatch }) => {
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
