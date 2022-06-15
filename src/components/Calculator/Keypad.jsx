import React from 'react'

// Styling
import { Keypad } from './components'

// Components
import DigitButton from './DigitButton'
import OperationButton from './OperationButton'

// ! Keypad component
export default ({ dispatch }) => {
  return (
    <Keypad>
      <OperationButton operation="C" />
      <DigitButton digit="7" dispatch={dispatch} />
      <DigitButton digit="8" dispatch={dispatch} />
      <DigitButton digit="9" dispatch={dispatch} />
      <OperationButton operation="*" dispatch={dispatch} />
      <OperationButton operation="-" dispatch={dispatch} />
      <DigitButton digit="4" dispatch={dispatch} />
      <DigitButton digit="5" dispatch={dispatch} />
      <DigitButton digit="6" dispatch={dispatch} />
      <OperationButton operation="/" dispatch={dispatch} />
      <OperationButton operation="+" dispatch={dispatch} />
      <DigitButton digit="1" dispatch={dispatch} />
      <DigitButton digit="2" dispatch={dispatch} />
      <DigitButton digit="3" dispatch={dispatch} />
      <OperationButton operation="=" dispatch={dispatch} />
      <OperationButton operation="." dispatch={dispatch} />
      <OperationButton operation="(" dispatch={dispatch} />
      <DigitButton digit="0" dispatch={dispatch} />
      <OperationButton operation=")" dispatch={dispatch} />
      <OperationButton operation="CE" dispatch={dispatch} />
    </Keypad>
  )
}
