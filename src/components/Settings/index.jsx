import React from 'react'

import { Card, Heading, Description } from './components'

import ThemeSelector from './ThemeSelector'
import HistoryCleaner from './HistoryCleaner'

export default () => {
  return (
    <Card>
      <Heading>Settings</Heading>
      <Description>Switch Theme</Description>
      <ThemeSelector />
      <HistoryCleaner />
    </Card>
  )
}
