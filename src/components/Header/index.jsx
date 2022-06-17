import React from 'react'

import theme from '@/theme'
import { Card, Heading, Anchor } from './components'
import {
	HOME_PAGE_ROUTE,
	SETTINGS_PAGE_ROUTE,
} from '@/constants'

import { Link } from 'react-router-dom'

export default () => {
	return (
		<Card color={theme.colors.primary}>
			<Heading>Calculator App</Heading>
			<Anchor>
				<Link to={HOME_PAGE_ROUTE}>Home</Link>
			</Anchor>
			<Anchor>
				<Link to={SETTINGS_PAGE_ROUTE}>Settings</Link>
			</Anchor>
		</Card>
	)
}
