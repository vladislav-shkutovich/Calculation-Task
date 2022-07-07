import React from 'react'

import { Dropdown } from './components'

import { ACTIONS } from '@/constants'

export default ({ selectedTheme, dispatch }) => {
	const selectTheme = event => {
		dispatch({
			type: ACTIONS.SELECT_THEME,
			payload: event.target.value,
		})
	}

	return (
		<Dropdown
			defaultValue={selectedTheme}
			onChange={selectTheme}>
			<option value="light">Light Theme</option>
			<option value="colored">Colored Theme</option>
			<option value="dark">Dark Theme</option>
		</Dropdown>
	)
}
