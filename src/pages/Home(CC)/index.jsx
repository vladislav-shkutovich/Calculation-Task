import React from 'react'

import { StyledCalculator } from './styled'

import { MainLayout } from '@/layouts/MainLayout'
import ErrorBoundary from '@/components/ErrorBoundary'
import Display from '@/components/CalculatorCC/Display'
import History from '@/components/CalculatorCC/History'
import Keypad from '@/components/CalculatorCC/Keypad'

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
