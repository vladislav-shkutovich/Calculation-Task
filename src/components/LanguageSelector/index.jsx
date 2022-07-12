import React from 'react'

import { StyledDropdown } from './styled'

import { useTranslation } from 'react-i18next'

export default ({ selectedTheme, dispatch }) => {
	const { i18n, t } = useTranslation()

	const handleLanguage = event =>
		i18n.changeLanguage(event.target.value)

	const languageByDefault = JSON.stringify(
		localStorage.getItem('i18nextLng'),
	).slice(1, -1)

	// todo .map() для двух объектов со значениями для языка и тем
	return (
		<StyledDropdown
			defaultValue={languageByDefault}
			onChange={handleLanguage}>
			<option value="en">{t('english')}</option>
			<option value="ru-RU">{t('russian')}</option>
		</StyledDropdown>
	)
}
