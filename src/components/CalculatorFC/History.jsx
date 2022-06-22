import React, { useState } from 'react'

import { History } from './components'

import ShowMoreButton from './ShowMoreButton'

export default ({ history }) => {
	const [
		fullHistoryIsShown,
		setFullHistoryIsShown,
	] = useState(false)

	const [buttonIsHidden, setButtonIsHidden] = useState(
		false,
	)

	const showFullHistoryHandler = () => {
		setFullHistoryIsShown(true)
		setButtonIsHidden(true)
	}

	return (
		<History>
			<p>History</p>
			<ul>
				{history
					?.slice(
						0,
						fullHistoryIsShown ? history.length : 3,
					)
					.map((el, i) => <li key={i}>{el}</li>)}
			</ul>
			{history?.length > 3 && !buttonIsHidden && (
				<ShowMoreButton
					handleShowMore={showFullHistoryHandler}
				/>
			)}
		</History>
	)
}
