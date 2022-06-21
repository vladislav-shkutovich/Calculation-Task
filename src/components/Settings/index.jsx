import React from 'react'

import { Card, Heading, Description } from './components'

import ThemeSelector from './ThemeSelector'
import HistoryCleaner from './HistoryCleaner'

export default ({ dispatch }) => {
	return (
		<Card>
			<Heading>Settings</Heading>
			<Description>Switch Theme</Description>
			<ThemeSelector dispatch={dispatch} />
			<HistoryCleaner dispatch={dispatch} />
		</Card>
	)
}
