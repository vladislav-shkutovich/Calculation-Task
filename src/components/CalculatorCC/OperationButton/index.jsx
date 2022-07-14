import React from 'react'
import { connect } from 'react-redux'
import {
	StyledAdditionalButton,
	StyledKeypadButton,
	StyledHistoryButton,
} from './styled'
import { ACTIONS } from '@/constants'

class OperationButton extends React.Component {
	render(props) {
		const { addOperation, operation } = this.props

		let currentOperation
		switch (operation) {
			case '(':
				currentOperation = ACTIONS.ADD_BRACKET
				break
			case ')':
				currentOperation = ACTIONS.ADD_BRACKET
				break
			case 'CE':
				currentOperation = ACTIONS.CLEAR
				break
			case 'C':
				currentOperation = ACTIONS.DELETE_DIGIT
				break
			case '=':
				currentOperation = ACTIONS.EVALUATE
				break
			case '+/-':
				currentOperation = ACTIONS.TOGGLE_SIGN
				break
			case 'History':
				currentOperation = ACTIONS.TOGGLE_HISTORY
				break
			case 'История':
				currentOperation = ACTIONS.TOGGLE_HISTORY
				break
			default:
				currentOperation = ACTIONS.CHOOSE_OPERATION
		}

		return operation === '+/-' || operation === '%' ? (
			<StyledAdditionalButton
				onClick={() =>
					addOperation(currentOperation, operation)
				}>
				{operation}
			</StyledAdditionalButton>
		) : operation === 'History' ||
		  operation === 'История' ? (
			<StyledHistoryButton
				onClick={() =>
					addOperation(currentOperation, operation)
				}>
				{operation}
			</StyledHistoryButton>
		) : (
			<StyledKeypadButton
				onClick={() =>
					addOperation(currentOperation, operation)
				}>
				{operation}
			</StyledKeypadButton>
		)
	}
}

const mapDispatchToProps = dispatch => {
	return {
		addOperation: (currentOperation, operation) =>
			dispatch({
				type: currentOperation,
				payload: { operation },
			}),
	}
}

export default connect(
	null,
	mapDispatchToProps,
)(OperationButton)
