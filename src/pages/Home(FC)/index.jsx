import React from 'react'

import { StyledCalculator } from './styled'

import { MainLayout } from '@/layouts/MainLayout'
import ErrorBoundary from '@/components/ErrorBoundary'
import Display from '@/components/CalculatorFC/Display'
import History from '@/components/CalculatorFC/History'
import Keypad from '@/components/CalculatorFC/Keypad'

export default () => {
	return (
		<MainLayout>
			<StyledCalculator>
				<Display />

				<Keypad />

				<ErrorBoundary>
					<History />
				</ErrorBoundary>
			</StyledCalculator>
		</MainLayout>
	)
}
