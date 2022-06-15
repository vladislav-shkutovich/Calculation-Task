import React from 'react'

// Styling
import { KeypadButton } from './components'

// ! OperationButton component
export default props => {
  return <KeypadButton>{props.operation}</KeypadButton>
}
