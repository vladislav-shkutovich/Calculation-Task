import React from 'react'

import i18n from 'i18next'

import { ShowMoreButton } from './components'

export default class extends React.Component {
	render(props) {
		const { handleShowMore } = this.props

		return (
			<ShowMoreButton onClick={handleShowMore}>
				{i18n.t('show_more')}
			</ShowMoreButton>
		)
	}
}
