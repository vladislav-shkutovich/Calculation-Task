import React from 'react'

import theme from '@/theme'
import { Card, Heading, Anchor } from './components'
import {
  HOME_PAGE_ROUTE,
  SETTINGS_PAGE_ROUTE,
} from '@/constants'

export default () => {
  return (
    <Card color={theme.colors.primary}>
      <Heading>Calculator App</Heading>
      <Anchor href={HOME_PAGE_ROUTE}>Home</Anchor>
      <Anchor href={SETTINGS_PAGE_ROUTE}>Settings</Anchor>
    </Card>
  )
}
