import React from 'react'

import { StyledCalculator } from './styled'

import { MainLayout } from '@/layouts/MainLayout'
import ErrorBoundary from '@/components/ErrorBoundary'
import Display from '@/components/CalculatorFC/Display'
import History from '@/components/CalculatorFC/History'
import Keypad from '@/components/CalculatorFC/Keypad'

export default ({ state, dispatch }) => {
	return (
		<MainLayout>
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
		</MainLayout>
	)
}
