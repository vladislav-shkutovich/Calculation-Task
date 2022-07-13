import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { StyledDropdown } from './styled'
import { ACTIONS, languages, themes } from '@/constants'

export default ({ selectionType }) => {
	const dispatch = useDispatch()
	const store = useSelector(store => store)
	const { i18n, t } = useTranslation()

	let selectionOptions,
		selectionDefaultValue,
		handleSelection

	switch (selectionType) {
		case 'theme':
			selectionOptions = themes

			selectionDefaultValue = store?.selectedTheme

			handleSelection = event => {
				dispatch({
					type: ACTIONS.SELECT_THEME,
					payload: event.target.value,
				})
			}
			break

		case 'language':
			selectionOptions = languages

			selectionDefaultValue = JSON.stringify(
				localStorage.getItem('i18nextLng'),
			).slice(1, -1)

			handleSelection = event =>
				i18n.changeLanguage(event.target.value)
			break
	}

	return (
		<StyledDropdown
			defaultValue={selectionDefaultValue}
			onChange={handleSelection}>
			>
			{Object.values(selectionOptions).map(el => (
				<option key={el.value} value={el.value}>
					{t(el.text)}
				</option>
			))}
		</StyledDropdown>
	)
}
