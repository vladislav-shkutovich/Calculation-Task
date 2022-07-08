import React, {
	useReducer,
	useEffect,
	lazy,
	Suspense,
} from 'react'

// Components
import Loader from '@/components/Loader'

// Routes
import {
	Switch,
	Route,
	BrowserRouter,
	Redirect,
} from 'react-router-dom'

// Constants for routes and initial state
import {
	HOME_PAGE_FC_ROUTE,
	HOME_PAGE_CC_ROUTE,
	SETTINGS_PAGE_ROUTE,
	initialState,
} from '@/constants'

// Reducers
import { reducer } from '@/reducers'

// Helpers
import { setLocalStorage } from '@/helpers'

// Styling
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '@/globalStyles'

// Themes
import themeLight from '@/themes/themeLight'
import themeColored from '@/themes/themeColored'
import themeDark from '@/themes/themeDark'

// Pages
// const HomePageFC = lazy(() =>
// 	import('../pages/Home(FC)/index.jsx'),
// )
const HomePageFC = lazy(() =>
	import('@/pages/Home(FC)/index.jsx'),
)
const HomePageCC = lazy(() =>
	import('@/pages/Home(CC).jsx'),
)
const SettingsPage = lazy(() =>
	import('@/pages/Settings.jsx'),
)

export default () => {
	const [state, dispatch] = useReducer(
		reducer,
		initialState,
	)

	const { history, historyIsShown, selectedTheme } = state

	useEffect(() => {
		setLocalStorage({
			history,
			historyIsShown,
			selectedTheme,
		})
	}, [history, historyIsShown, selectedTheme])

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
									state={state}
									dispatch={dispatch}
								/>
							)}
						/>
						<Route
							exact
							path={HOME_PAGE_CC_ROUTE}
							render={() => (
								<HomePageCC
									state={state}
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

// * Refactored 08.07.2022 ✔
