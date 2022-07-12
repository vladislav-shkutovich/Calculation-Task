import React from 'react'

import { PageLayout, Card } from './styled'

import Header from '@/components/Header'

export const MainLayout = ({ children }) => {
	return (
		<PageLayout>
			<Card>
				<Header />
				{children}
			</Card>
		</PageLayout>
	)
}
