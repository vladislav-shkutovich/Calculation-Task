import React from 'react'

import { MainLayout } from '@/layouts/MainLayout'

import CalculatorCC from '@/components/CalculatorСС'

export default ({ state, dispatch }) => {
	return (
		<MainLayout>
			<CalculatorCC state={state} dispatch={dispatch} />
		</MainLayout>
	)
}
