import React from 'react'

import { useTranslation } from 'react-i18next'

import { MainLayout } from '@/layouts/MainLayout'
import {
	StyledSettings,
	Heading,
	Description,
} from './styled'

import ThemeSelector from '@/components/ThemeSelector'
import LanguageSelector from '@/components/LanguageSelector'
import CleanerButton from '@/components/CleanerButton'

export default ({ selectedTheme, dispatch }) => {
	const { t } = useTranslation()

	return (
		<MainLayout>
			<StyledSettings>
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
			</StyledSettings>
		</MainLayout>
	)
}
