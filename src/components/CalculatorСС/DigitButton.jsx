import React from 'react'

import { KeypadButton } from './components'

import { ACTIONS } from '@/constants'

export default class extends React.Component {
	render(props) {
		const { digit, dispatch } = this.props

		return (
			<KeypadButton
				onClick={() =>
					dispatch({
						type: ACTIONS.ADD_DIGIT,
						payload: { digit },
					})
				}>
				{digit}
			</KeypadButton>
		)
	}
}
