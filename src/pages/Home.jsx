import React from 'react'

import { PageLayout, Card } from '@/layouts'

import Header from '@/components/Header'
import Calculator from '@/components/Calculator'

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
