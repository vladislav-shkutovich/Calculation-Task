import React from 'react'

import { ShowMoreButton } from './components'

export default class extends React.Component {
	render(props) {
		const { handleShowMore } = this.props

		return (
			<ShowMoreButton onClick={handleShowMore}>
				Show more...
			</ShowMoreButton>
		)
	}
}
