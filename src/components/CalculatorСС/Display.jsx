import React from 'react'

import { Display } from './components'

export default class extends React.Component {
	render(props) {
		const { state } = this.props

		return (
			<Display>
				{state.previousOperand}
				{state.operation}
				{state.currentOperand}
			</Display>
		)
	}
}
