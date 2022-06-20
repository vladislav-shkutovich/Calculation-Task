import React from 'react'

import { PageLayout, Card } from '@/layouts'

import Header from '@/components/Header'
import CalculatorCC from '@/components/CalculatorСС'

export default ({ state, dispatch }) => {
	return (
		<PageLayout>
			<Card>
				<Header />
				<CalculatorCC state={state} dispatch={dispatch} />
			</Card>
		</PageLayout>
	)
}
