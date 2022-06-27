describe('Application init', () => {
	it('visits the app', () => {
		cy.visit('/')
	})

	it('it check navigation titles', () => {
		cy.get('.components__Card-sc-1p8fyki-0')
			.should('be.visible')
			.should(
				'have.text',
				'Calculator AppHome(FC)Home(CC)Settings',
			)
	})
})
