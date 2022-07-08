import React from 'react'

import { PageLayout, Card } from '@/layouts'

import Header from '@/components/Header'

// todo это общий layout для всех страниц
// то же самое с Card
export const MainLayout = children => {
	return (
		<PageLayout>
			<Card>
				<Header />
				{children}
			</Card>
		</PageLayout>
	)
}
