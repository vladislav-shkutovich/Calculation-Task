import React from 'react'

import { ShowMoreButton } from './components'

export default ({ handleShowMore }) => {
	return (
		<ShowMoreButton onClick={handleShowMore}>
			Show more...
		</ShowMoreButton>
	)
}
