import React from 'react'

import { useSelector } from 'react-redux'

import { useTranslation } from 'react-i18next'

import { StyledKeypad } from './styled'

import DigitButton from '../DigitButton'
import OperationButton from '../OperationButton'

export default () => {
	const store = useSelector(store => store)

	const { t } = useTranslation()

	return (
		<StyledKeypad state={store}>
			<OperationButton operation="C" />
			<DigitButton digit="7" />
			<DigitButton digit="8" />
			<DigitButton digit="9" />
			<OperationButton operation="*" />
			<OperationButton operation="-" />
			<DigitButton digit="4" />
			<DigitButton digit="5" />
			<DigitButton digit="6" />
			<OperationButton operation="/" />
			<OperationButton operation="+" />
			<DigitButton digit="1" />
			<DigitButton digit="2" />
			<DigitButton digit="3" />
			<OperationButton operation="=" />
			<DigitButton digit="." />
			<OperationButton operation="(" />
			<DigitButton digit="0" />
			<OperationButton operation=")" />
			<OperationButton operation="CE" />
			<OperationButton operation="+/-" />
			<OperationButton operation="%" />
			<OperationButton operation={t('history')} />
		</StyledKeypad>
	)
}
