import React from 'react'
import { connect } from 'react-redux'
import i18n from 'i18next'
import { StyledKeypad } from './styled'
import DigitButton from '../DigitButton'
import OperationButton from '../OperationButton'

class Keypad extends React.Component {
	render(props) {
		const { historyIsShown } = this.props

		// todo сделать через map() как селектор
		return (
			<StyledKeypad historyIsShown={historyIsShown}>
				<OperationButton operation="C" />
				<DigitButton type="тип" digit="7" />
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
				<OperationButton operation={i18n.t('history')} />
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
