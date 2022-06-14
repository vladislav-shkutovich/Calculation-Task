import React from 'react'

import { Home } from './components'

import Display from './Display'
import History from './History'
import Keypad from './Keypad'

export default () => {
  return (
    <Home>
      <Display />
      <Keypad />
      <History />
    </Home>
  )
}
