import React from 'react'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { StyledKeypad } from './styled'
import DigitButton from '@/components/CalculatorFC/DigitButton'
import OperationButton from '@/components/CalculatorFC/OperationButton'
import { keypadButtons } from '@/constants'

export default () => {
	const historyIsShown = useSelector(
		store => store.historyIsShown,
	)

	const { t } = useTranslation()

	return (
		<StyledKeypad historyIsShown={historyIsShown}>
			{Object.values(keypadButtons).map(el => {
				switch (el.type) {
					case 'digit':
						return (
							<DigitButton
								key={el.value}
								digit={el.value}
							/>
						)

					case 'operation':
						return (
							<OperationButton
								key={el.value}
								operation={
									el.value === 'history'
										? t(el.value)
										: el.value
								}
							/>
						)
				}
			})}
		</StyledKeypad>
	)
}
