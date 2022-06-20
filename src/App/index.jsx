import React, { useReducer, lazy, Suspense } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { reducer } from '@/helpers'

import {
	HOME_PAGE_FC_ROUTE,
	HOME_PAGE_CC_ROUTE,
	SETTINGS_PAGE_ROUTE,
} from '@/constants'

import Loader from '@/components/Loader'

const HomePageFC = lazy(() =>
	import('@/pages/Home(FC).jsx'),
)
const HomePageCC = lazy(() =>
	import('@/pages/Home(CC).jsx'),
)
const SettingsPage = lazy(() =>
	import('@/pages/Settings.jsx'),
)

export default () => {
	const [
		{ currentOperand, previousOperand, operation, history },
		dispatch,
	] = useReducer(reducer, {})

	return (
		<Suspense fallback={<Loader />}>
			<Switch>
				<Route
					exact
					path={HOME_PAGE_FC_ROUTE}
					render={() => (
						<HomePageFC
							state={{
								currentOperand,
								previousOperand,
								operation,
								history,
							}}
							dispatch={dispatch}
						/>
					)}
				/>
				<Route
					exact
					path={HOME_PAGE_CC_ROUTE}
					render={() => (
						<HomePageCC
							state={{
								currentOperand,
								previousOperand,
								operation,
								history,
							}}
							dispatch={dispatch}
						/>
					)}
				/>
				<Route
					path={SETTINGS_PAGE_ROUTE}
					render={() => (
						<SettingsPage dispatch={dispatch} />
					)}
				/>
				<Redirect to={HOME_PAGE_FC_ROUTE} />
			</Switch>
		</Suspense>
	)
}
