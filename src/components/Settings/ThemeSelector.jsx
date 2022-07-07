import React from 'react'

import { useTranslation } from 'react-i18next'

import { Dropdown } from './components'

import { ACTIONS } from '@/constants'

export default ({ selectedTheme, dispatch }) => {
	const { t } = useTranslation()

	const selectTheme = event => {
		dispatch({
			type: ACTIONS.SELECT_THEME,
			payload: event.target.value,
		})
	}

	return (
		<Dropdown
			defaultValue={selectedTheme}
			onChange={selectTheme}>
			<option value="light">{t('light_theme')}</option>
			<option value="colored">{t('colored_theme')}</option>
			<option value="dark">{t('dark_theme')}</option>
		</Dropdown>
	)
}
