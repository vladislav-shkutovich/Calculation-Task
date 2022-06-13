import React from 'react'

import Display from './Display'
import History from './History'
import Keypad from './Keypad'

export default () => {
  return (
    <React.Fragment>
      <Display />
      <History />
      <Keypad />
    </React.Fragment>
  )
}
