import React from 'react'
import { connect } from 'react-redux'
import { StyledDisplay } from './styled'

class Display extends React.Component {
	render(props) {
		const { state } = this.props

		// todo убрать классы CSS и сделать только через Styled Components
		return (
			<StyledDisplay state={state}>
				<div className="background-values">
					{state.previousOperand}
					{state.operation}
				</div>
				<div className="front-values">
					{state.currentOperand}
				</div>
			</StyledDisplay>
		)
	}
}

const mapStateToProps = state => {
	return {
		state: state,
	}
}

export default connect(mapStateToProps)(Display)
