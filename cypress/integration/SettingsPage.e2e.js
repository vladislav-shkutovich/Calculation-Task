describe('Settings page: themes', () => {
	beforeEach(() => {
		cy.visit('/Settings')
	})

	it('it check theme by default is dark', () => {
		cy.get('select option:selected').should(
			'have.value',
			'dark',
		)

		cy.get('.fGNkov').should(
			'have.css',
			'background-color',
			'rgb(57, 57, 58)',
		)
	})

	it('it check select light theme', () => {
		cy.get('select').select('light')

		cy.get('.erXBvy').should(
			'have.css',
			'background-color',
			'rgb(255, 255, 255)',
		)
	})

	it('it check select colored theme, then select dark again', () => {
		cy.get('select').select('colored')

		cy.get('.lazVvg').should(
			'have.css',
			'background-color',
			'rgb(255, 223, 189)',
		)

		cy.get('select').select('dark')
		cy.get('.fGNkov').should(
			'have.css',
			'background-color',
			'rgb(57, 57, 58)',
		)
	})
})
