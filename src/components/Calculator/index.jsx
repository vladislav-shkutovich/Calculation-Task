import React from 'react'

import { Card } from './components'

import Display from './Display'
import History from './History'
import Keypad from './Keypad'

export default () => {
  return (
    <Card>
      <Display />
      <Keypad />
      <History />
    </Card>
  )
}
