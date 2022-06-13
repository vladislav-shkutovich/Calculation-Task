import React from 'react'

import theme from '@/theme'
import { Header, Heading } from './components'
import Button from './Button'

export default () => {
  return (
    <Header color={theme.colors.primary}>
      <Heading>Calculator App</Heading>
      <Button name="Home" />
      <Button name="Settings" />
    </Header>
  )
}
