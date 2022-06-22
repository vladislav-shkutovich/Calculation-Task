import React, { useReducer, lazy, Suspense } from 'react'

// Components
import Loader from '@/components/Loader'

// Routes
import {
	Switch,
	Route,
	BrowserRouter,
	Redirect,
} from 'react-router-dom'

import {
	HOME_PAGE_FC_ROUTE,
	HOME_PAGE_CC_ROUTE,
	SETTINGS_PAGE_ROUTE,
} from '@/constants'

// Reducers
import { reducer } from '@/reducers'

// Styling
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '@/globalStyles'

// Themes
import themeLight from '@/themes/themeLight'
import themeColored from '@/themes/themeColored'
import themeDark from '@/themes/themeDark'

// Pages
const HomePageFC = lazy(() =>
	import('@/pages/Home(FC).jsx'),
)
const HomePageCC = lazy(() =>
	import('@/pages/Home(CC).jsx'),
)
const SettingsPage = lazy(() =>
	import('@/pages/Settings.jsx'),
)

// ////////////////////////////////////////////////////////////////

export default () => {
	const [
		{
			currentOperand,
			previousOperand,
			operation,
			history,
			selectedTheme = 'dark',
		},
		dispatch,
	] = useReducer(reducer, {})

	const currentTheme =
		selectedTheme === 'light'
			? themeLight
			: selectedTheme === 'colored'
			? themeColored
			: themeDark

	return (
		<ThemeProvider theme={currentTheme}>
			<BrowserRouter>
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
								<SettingsPage
									selectedTheme={selectedTheme}
									dispatch={dispatch}
								/>
							)}
						/>
						<Redirect to={HOME_PAGE_FC_ROUTE} />
					</Switch>
				</Suspense>
				<GlobalStyles />
			</BrowserRouter>
		</ThemeProvider>
	)
}
