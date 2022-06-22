import React from 'react'

// Styling
import { ShowMoreButton } from './components'

export default ({ handleShowMore }) => {
	return (
		<ShowMoreButton onClick={handleShowMore}>
			Show more...
		</ShowMoreButton>
	)
}
