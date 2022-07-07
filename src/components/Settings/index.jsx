import React from 'react'

import { Card, Heading, Description } from './components'

import ThemeSelector from './ThemeSelector'
import LanguageSelector from './LanguageSelector'
import CleanerButton from './CleanerButton'

export default ({ selectedTheme, dispatch }) => {
	return (
		<Card>
			<Heading>Settings</Heading>
			<Description>Switch Theme</Description>
			<ThemeSelector
				selectedTheme={selectedTheme}
				dispatch={dispatch}
			/>
			<Description>Switch Language</Description>
			<LanguageSelector
				selectedTheme={selectedTheme}
				dispatch={dispatch}
			/>

			<CleanerButton
				type="CLEAR_HISTORY"
				name="Clear History"
				dispatch={dispatch}
			/>
			<CleanerButton
				type="CLEAR_HISTORY_AND_RESULT"
				name="Clear History & Result"
				dispatch={dispatch}
			/>
		</Card>
	)
}
