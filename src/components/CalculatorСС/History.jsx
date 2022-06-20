import React from 'react'

import { History } from './components'

export default ({ state }) => {
	return (
		<History>
			<p>History</p>
			<ul>
				{state.history?.map((el, i) => (
					<li key={i}>{el}</li>
				))}
			</ul>
		</History>
	)
}
