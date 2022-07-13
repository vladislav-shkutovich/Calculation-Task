import React from 'react'

import { useTranslation } from 'react-i18next'

import { MainLayout } from '@/layouts/MainLayout'
import {
	StyledSettings,
	Heading,
	Description,
} from './styled'

import Selector from '@/components/Selector'
import CleanerButton from '@/components/CleanerButton'

export default ({ selectedTheme, dispatch }) => {
	const { t } = useTranslation()

	return (
		<MainLayout>
			<StyledSettings>
				<Heading>{t('settings')}</Heading>

				<Description>{t('switch_theme')}</Description>
				<Selector
					selectedTheme={selectedTheme}
					dispatch={dispatch}
					selectionType="theme"
				/>

				<Description>{t('switch_language')}</Description>
				<Selector
					dispatch={dispatch}
					selectionType="language"
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
