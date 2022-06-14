import React from 'react'

import { PageLayout, Card } from '@/layouts'

import Header from '@/components/Header'
import Settings from '@/components/Settings'

export default () => {
  return (
    <PageLayout>
      <Card>
        <Header />
        <Settings />
      </Card>
    </PageLayout>
  )
}
