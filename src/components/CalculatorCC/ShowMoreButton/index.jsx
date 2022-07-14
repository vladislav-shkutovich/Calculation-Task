import React from 'react'
import i18n from 'i18next'
import { StyledShowMoreButton } from './styled'

export default class extends React.Component {
	render(props) {
		const { handleShowMore } = this.props

		return (
			<StyledShowMoreButton onClick={handleShowMore}>
				{i18n.t('show_more')}
			</StyledShowMoreButton>
		)
	}
}
