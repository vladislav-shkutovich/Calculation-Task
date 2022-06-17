import React from 'react'

import { History } from './components'

export default ({ history }) => {
	return (
		<History>
			<p>History</p>
			<ul>
				<li>dummy expression</li>
				<li>dummy expression</li>
				<li>dummy expression</li>
				<li>dummy expression</li>
				<li>dummy expression</li>
				<li>dummy expression</li>
				{history?.map((el, i) => <li key={i}>{el}</li>)}
			</ul>
		</History>
	)
}
