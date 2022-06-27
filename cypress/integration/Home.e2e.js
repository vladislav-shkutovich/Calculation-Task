describe('Home page', () => {
	beforeEach(() => {
		cy.visit('/')
	})

	it('it check application title', () => {
		cy.get('p')
			.should('be.visible')
			.contains('Calculator App')
	})
})
