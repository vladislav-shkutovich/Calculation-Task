import React from 'react'

// Styling
import { Display } from './components'

// ! Display component
export default ({ userInputs }) => {
  return (
    <Display>
      {userInputs.previousOperand} {userInputs.operation}
      {userInputs.currentOperand}
    </Display>
  )
}
