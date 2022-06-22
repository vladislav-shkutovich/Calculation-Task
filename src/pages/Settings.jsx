import React from 'react'

import { PageLayout, Card } from '@/layouts'

import Header from '@/components/Header'
import Settings from '@/components/Settings'

export default ({ selectedTheme, dispatch }) => {
	return (
		<PageLayout>
			<Card>
				<Header />
				<Settings
					selectedTheme={selectedTheme}
					dispatch={dispatch}
				/>
			</Card>
		</PageLayout>
	)
}
