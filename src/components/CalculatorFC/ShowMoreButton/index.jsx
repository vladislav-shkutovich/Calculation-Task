import React from 'react'

import { useTranslation } from 'react-i18next'

import { StyledShowMoreButton } from './styled'

export default ({ handleShowMore }) => {
	const { t } = useTranslation()

	return (
		<StyledShowMoreButton onClick={handleShowMore}>
			{t('show_more')}
		</StyledShowMoreButton>
	)
}
