import React from 'react'

import { PageLayout } from '@/layouts'

import Header from '@/components/Header'
import Calculator from '@/components/Calculator'

import { Card } from './components'

export default () => {
  return (
    <PageLayout>
      <Card>
        <Header />
        <Calculator />
      </Card>
    </PageLayout>
  )
}
