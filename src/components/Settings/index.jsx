import React from 'react'

import { useTranslation } from 'react-i18next'

import { Card, Heading, Description } from './components'

import ThemeSelector from './ThemeSelector'
import LanguageSelector from './LanguageSelector'
import CleanerButton from './CleanerButton'

// ! это всё в Settings
export default ({ selectedTheme, dispatch }) => {
	const { t } = useTranslation()

	return (
		<Card>
			<Heading>{t('settings')}</Heading>
			<Description>{t('switch_theme')}</Description>
			<ThemeSelector
				selectedTheme={selectedTheme}
				dispatch={dispatch}
			/>
			<Description>{t('switch_language')}</Description>
			<LanguageSelector
				selectedTheme={selectedTheme}
				dispatch={dispatch}
			/>

			<CleanerButton
				type="CLEAR_HISTORY"
				name={t('clear_history')}
				dispatch={dispatch}
			/>
			<CleanerButton
				type="CLEAR_HISTORY_AND_RESULT"
				name={t('clear_history_and_result')}
				dispatch={dispatch}
			/>
		</Card>
	)
}
