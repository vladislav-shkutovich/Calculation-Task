// React
import React, { useEffect, lazy, Suspense } from 'react'

// Redux
import { useSelector } from 'react-redux'

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
} from '@/constants'

// Helpers
import { setLocalStorage } from '@/helpers'

// Styling
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '@/globalStyles'

// Themes
import themeLight from '@/themes/themeLight'
import themeColored from '@/themes/themeColored'
import themeDark from '@/themes/themeDark'

const HomePageFC = lazy(() =>
	import('@/pages/Home(FC)/index.jsx'),
)
const HomePageCC = lazy(() =>
	import('@/pages/Home(CC)/index.jsx'),
)
const SettingsPage = lazy(() =>
	import('@/pages/Settings/index.jsx'),
)

export default () => {
	const store = useSelector(store => store)
	console.clear()
	console.log(store)

	const history = useSelector(store => store?.history) || []
	const historyIsShown =
		useSelector(store => store?.historyIsShown) || false
	const selectedTheme =
		useSelector(store => store?.selectedTheme) || 'dark'

	useEffect(() => {
		setLocalStorage({
			history,
			historyIsShown,
			selectedTheme,
		})
	}, [history, historyIsShown, selectedTheme])

	let currentTheme
	switch (selectedTheme) {
		case 'light':
			currentTheme = themeLight
			break
		case 'colored':
			currentTheme = themeColored
			break
		default:
			currentTheme = themeDark
			break
	}

	return (
		<ThemeProvider theme={currentTheme}>
			<BrowserRouter>
				<Suspense fallback={<Loader />}>
					<Switch>
						<Route
							exact
							path={HOME_PAGE_FC_ROUTE}
							render={() => <HomePageFC />}
						/>
						<Route
							exact
							path={HOME_PAGE_CC_ROUTE}
							render={() => <HomePageCC />}
						/>
						<Route
							path={SETTINGS_PAGE_ROUTE}
							render={() => <SettingsPage />}
						/>
						<Redirect to={HOME_PAGE_FC_ROUTE} />
					</Switch>
				</Suspense>
				<GlobalStyles />
			</BrowserRouter>
		</ThemeProvider>
	)
}
