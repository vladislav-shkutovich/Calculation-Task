import React from 'react'

import { Keypad } from './components'
import KeypadButton from './KeypadButton'

export default () => {
  return (
    <Keypad>
      <KeypadButton name="C" />
      <KeypadButton name="7" />
      <KeypadButton name="8" />
      <KeypadButton name="9" />
      <KeypadButton name="*" />
      <KeypadButton name="-" />
      <KeypadButton name="4" />
      <KeypadButton name="5" />
      <KeypadButton name="6" />
      <KeypadButton name="/" />
      <KeypadButton name="+" />
      <KeypadButton name="1" />
      <KeypadButton name="2" />
      <KeypadButton name="3" />
      <KeypadButton name="=" />
      <KeypadButton name="." />
      <KeypadButton name="(" />
      <KeypadButton name="0" />
      <KeypadButton name=")" />
      <KeypadButton name="CE" />
    </Keypad>
  )
}
