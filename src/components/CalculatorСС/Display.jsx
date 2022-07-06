import React from 'react'

import { Display } from './components'

export default class extends React.Component {
	render(props) {
		const { state } = this.props

		return (
			<Display state={state}>
				<div className="background-values">
					{state.previousOperand}
					{state.operation}
				</div>
				<div className="front-values">
					{state.currentOperand}
				</div>
			</Display>
		)
	}
}
