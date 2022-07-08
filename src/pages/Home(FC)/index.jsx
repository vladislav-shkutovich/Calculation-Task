import React from 'react'

import { PageLayout, Card } from '@/layouts'
import { StyledCalculator } from './styled'

import ErrorBoundary from '@/components/ErrorBoundary'
import Header from '@/components/Header'
import Display from '@/components/CalculatorFC/Display'
import History from '@/components/CalculatorFC/History'
import Keypad from '@/components/CalculatorFC/Keypad'

export default ({ state, dispatch }) => {
	return (
		<PageLayout>
			<Card>
				<Header />

				<StyledCalculator>
					<Display state={state} />

					<Keypad dispatch={dispatch} state={state} />

					<ErrorBoundary>
						<History
							history={state?.history}
							historyIsShown={state.historyIsShown}
						/>
					</ErrorBoundary>
				</StyledCalculator>
			</Card>
		</PageLayout>
	)
}
