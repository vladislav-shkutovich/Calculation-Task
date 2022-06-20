import React from 'react'

import { HistoryCleaner } from './components'

import { ACTIONS } from '@/constants'

export default ({ dispatch }) => {
	return (
		<HistoryCleaner
			onClick={() =>
				dispatch({
					type: ACTIONS.CLEAR_HISTORY,
				})
			}>
			Clear All History
		</HistoryCleaner>
	)
}
