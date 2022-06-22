import React from 'react'

import { Card, Heading, Description } from './components'

import ThemeSelector from './ThemeSelector'
import HistoryCleaner from './HistoryCleaner'

export default ({ selectedTheme, dispatch }) => {
	return (
		<Card>
			<Heading>Settings</Heading>
			<Description>Switch Theme</Description>
			<ThemeSelector
				selectedTheme={selectedTheme}
				dispatch={dispatch}
			/>
			<HistoryCleaner dispatch={dispatch} />
		</Card>
	)
}
