import React from 'react'

// Styling
import { KeypadButton } from './components'

// Actions
import { ACTIONS } from '@/constants'

// ! OperationButton component
export default ({ dispatch, operation }) => {
  return (
    <KeypadButton
      onClick={() =>
        dispatch({
          type: ACTIONS.CHOOSE_OPERATION,
          payload: { operation },
        })
      }>
      {operation}
    </KeypadButton>
  )
}
