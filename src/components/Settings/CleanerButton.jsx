import React from 'react'

import { CleanerButton } from './components'

import { ACTIONS } from '@/constants'

export default ({ type, name, dispatch }) => {
	return (
		<CleanerButton
			onClick={() =>
				dispatch({
					type: ACTIONS[type],
				})
			}>
			{name}
		</CleanerButton>
	)
}
