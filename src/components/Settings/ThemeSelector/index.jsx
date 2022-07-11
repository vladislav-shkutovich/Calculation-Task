import React from 'react'

import { useTranslation } from 'react-i18next'

import { StyledDropdown } from './styled'

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
		<StyledDropdown
			defaultValue={selectedTheme}
			onChange={selectTheme}>
			<option value="light">{t('light_theme')}</option>
			<option value="colored">{t('colored_theme')}</option>
			<option value="dark">{t('dark_theme')}</option>
		</StyledDropdown>
	)
}
