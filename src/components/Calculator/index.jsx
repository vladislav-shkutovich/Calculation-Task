import React, { useReducer } from 'react'

// Styling
import { Card } from './components'

// Components
import Display from './Display'
import History from './History'
import Keypad from './Keypad'

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

      <Keypad dispatch={dispatch} />

      <History />
    </Card>
  )
}
