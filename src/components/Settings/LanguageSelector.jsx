import React from 'react'

import { Dropdown } from './components'

import { useTranslation } from 'react-i18next'

export default ({ selectedTheme, dispatch }) => {
	const { i18n } = useTranslation()

	const handleLanguage = event =>
		i18n.changeLanguage(event.target.value)

	const languageByDefault = JSON.stringify(
		localStorage.getItem('i18nextLng'),
	).slice(1, -1)

	return (
		<Dropdown
			defaultValue={languageByDefault}
			onChange={handleLanguage}>
			<option value="en">English</option>
			<option value="ru">Russian</option>
		</Dropdown>
	)
}
