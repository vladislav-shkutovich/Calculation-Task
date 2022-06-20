import React from 'react'

import theme from '@/theme'
import { Card, Heading, Anchor } from './components'
import {
	HOME_PAGE_FC_ROUTE,
	HOME_PAGE_CC_ROUTE,
	SETTINGS_PAGE_ROUTE,
} from '@/constants'

import { Link } from 'react-router-dom'

export default () => {
	return (
		<Card color={theme.colors.primary}>
			<Heading>Calculator App</Heading>
			<Anchor>
				<Link to={HOME_PAGE_FC_ROUTE}>Home(FC)</Link>
			</Anchor>
			<Anchor>
				<Link to={HOME_PAGE_CC_ROUTE}>Home(CC)</Link>
			</Anchor>
			<Anchor>
				<Link to={SETTINGS_PAGE_ROUTE}>Settings</Link>
			</Anchor>
		</Card>
	)
}
