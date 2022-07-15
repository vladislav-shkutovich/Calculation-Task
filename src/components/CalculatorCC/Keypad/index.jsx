import React from 'react'
import { connect } from 'react-redux'
import i18n from 'i18next'
import { StyledKeypad } from './styled'
import DigitButton from '@/components/CalculatorCC/DigitButton'
import OperationButton from '@/components/CalculatorCC/OperationButton'
import { keypadButtons } from '@/constants'

class Keypad extends React.Component {
	render(props) {
		const { historyIsShown } = this.props

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
											? i18n.t(el.value)
											: el.value
									}
								/>
							)
					}
				})}
			</StyledKeypad>
		)
	}
}

const mapStateToProps = state => {
	return {
		historyIsShown: state.historyIsShown,
	}
}

export default connect(mapStateToProps)(Keypad)
