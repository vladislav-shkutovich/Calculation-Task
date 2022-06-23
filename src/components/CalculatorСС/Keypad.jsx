import React from 'react'

import { Keypad } from './components'

import DigitButton from './DigitButton'
import OperationButton from './OperationButton'

export default class extends React.Component {
	render(props) {
		const { dispatch } = this.props

		return (
			<Keypad>
				<OperationButton
					operation="C"
					dispatch={dispatch}
				/>
				<DigitButton digit="7" dispatch={dispatch} />
				<DigitButton digit="8" dispatch={dispatch} />
				<DigitButton digit="9" dispatch={dispatch} />
				<OperationButton
					operation="*"
					dispatch={dispatch}
				/>
				<OperationButton
					operation="-"
					dispatch={dispatch}
				/>
				<DigitButton digit="4" dispatch={dispatch} />
				<DigitButton digit="5" dispatch={dispatch} />
				<DigitButton digit="6" dispatch={dispatch} />
				<OperationButton
					operation="/"
					dispatch={dispatch}
				/>
				<OperationButton
					operation="+"
					dispatch={dispatch}
				/>
				<DigitButton digit="1" dispatch={dispatch} />
				<DigitButton digit="2" dispatch={dispatch} />
				<DigitButton digit="3" dispatch={dispatch} />
				<OperationButton
					operation="="
					dispatch={dispatch}
				/>
				<DigitButton digit="." dispatch={dispatch} />
				<DigitButton digit="(" dispatch={dispatch} />
				<DigitButton digit="0" dispatch={dispatch} />
				<DigitButton digit=")" dispatch={dispatch} />
				<OperationButton
					operation="CE"
					dispatch={dispatch}
				/>
			</Keypad>
		)
	}
}
