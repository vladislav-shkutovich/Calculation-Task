import React from 'react'

import { ThemeSelector } from './components'

export default () => {
  return (
    <ThemeSelector>
      <option value="light">Light Theme</option>
      <option value="dark">Dark Theme</option>
    </ThemeSelector>
  )
}
