import React from 'react'

import { useTranslation } from 'react-i18next'

import theme from '@/themes/themeColored'
import { Card, Heading, Anchor } from './components'
import {
	HOME_PAGE_FC_ROUTE,
	HOME_PAGE_CC_ROUTE,
	SETTINGS_PAGE_ROUTE,
} from '@/constants'

import { Link } from 'react-router-dom'

export default () => {
	const { t } = useTranslation()

	return (
		<Card color={theme.colors.primary}>
			<Heading>Calculator App</Heading>
			<Anchor>
				<Link to={HOME_PAGE_FC_ROUTE}>{t('home_fc')}</Link>
			</Anchor>
			<Anchor>
				<Link to={HOME_PAGE_CC_ROUTE}>{t('home_сс')}</Link>
			</Anchor>
			<Anchor>
				<Link to={SETTINGS_PAGE_ROUTE}>
					{t('settings')}
				</Link>
			</Anchor>
		</Card>
	)
}
