import React from 'react'

import { useTranslation } from 'react-i18next'

import { ShowMoreButton } from './components'

export default ({ handleShowMore }) => {
	const { t } = useTranslation()

	return (
		<ShowMoreButton onClick={handleShowMore}>
			{t('show_more')}
		</ShowMoreButton>
	)
}
