import React, { useReducer } from 'react'

// Styling
import { Card, Keypad } from './components'

// Components
import Display from './Display'
import History from './History'
import OperationButton from './OperationButton'
import DigitButton from './DigitButton'

// Actions
import { ACTIONS } from '@/constants'

export default () => {
  function reducer(state, { type, payload }) {
    switch (type) {
      case ACTIONS.ADD_DIGIT:
        return {
          ...state,
          currentOperand: `${currentOperand || ''}${
            payload.digit
          }`,
        }
    }
  }

  const [
    { currentOperand, previousOperand, operation },
    dispatch,
  ] = useReducer(reducer, {})

  return (
    <Card>
      <Display
        userInputs={{
          currentOperand,
          previousOperand,
          operation,
        }}
      />

      <Keypad>
        <OperationButton operation="C" />
        <DigitButton digit="7" dispatch={dispatch} />
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
        <OperationButton operation="." />
        <OperationButton operation="(" />
        <DigitButton digit="0" />
        <OperationButton operation=")" />
        <OperationButton operation="CE" />
      </Keypad>

      <History />
    </Card>
  )
}
