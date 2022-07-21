import React from 'react'
import { connect } from 'react-redux'
import { StyledKeypadButton } from './styled'
import { ACTIONS } from '@/constants'

class DigitButton extends React.Component {
	render(props) {
		const { digit, addDigit } = this.props

		// todo заменить инлайн функцию на каррированную функцию
		return (
			<StyledKeypadButton onClick={() => addDigit(digit)}>
				{digit}
			</StyledKeypadButton>
		)
	}
}

const mapDispatchToProps = dispatch => {
	return {
		addDigit: digit =>
			dispatch({
				type: ACTIONS.ADD_DIGIT,
				payload: { digit },
			}),
	}
}

export default connect(
	null,
	mapDispatchToProps,
)(DigitButton)
