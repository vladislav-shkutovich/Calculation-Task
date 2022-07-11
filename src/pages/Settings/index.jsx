import React from 'react'

import { useTranslation } from 'react-i18next'

import { PageLayout, Card } from '@/layouts'
import {
	StyledSettings,
	Heading,
	Description,
} from './styled'

import Header from '@/components/Header'
import ThemeSelector from '@/components/Settings/ThemeSelector'
import LanguageSelector from '@/components/Settings/LanguageSelector'
import CleanerButton from '@/components/Settings/CleanerButton'

export default ({ selectedTheme, dispatch }) => {
	const { t } = useTranslation()

	return (
		<PageLayout>
			<Card>
				<Header />

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
			</Card>
		</PageLayout>
	)
}
