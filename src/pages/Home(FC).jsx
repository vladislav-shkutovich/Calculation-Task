import React from 'react'

import { PageLayout, Card } from '@/layouts'

import Header from '@/components/Header'
import CalculatorFC from '@/components/CalculatorFC'

export default ({ state, dispatch }) => {
	return (
		<PageLayout>
			<Card>
				<Header />
				<CalculatorFC state={state} dispatch={dispatch} />
			</Card>
		</PageLayout>
	)
}
