import {
	typeShortExpression,
	typeLongExpression,
} from './helpers.e2e'

describe('Home page', () => {
	beforeEach(() => {
		cy.visit('/')
	})

	it('it check calculator fields is empty by default', () => {
		// Display
		cy.get('.components__Display-sc-16dqpkq-1')
			.should('be.visible')
			.should('have.value', '')
		// History
		cy.get('ul')
			.should('be.visible')
			.should('be.empty')
	})

	// * Checking of keypad buttons from 0 to 9
	for (let i = 0; i < 10; i++) {
		it('it check keypad button ' + i, () => {
			cy.get('button')
				.contains(i)
				.click()
			cy.get(
				'.components__KeypadButton-sc-16dqpkq-3',
			).contains(i)
		})
	}

	// * Checking of calculations and display work
	it('it check expression typing and displaying result', () => {
		// Typing the expression '.2+2(.1-1*2)='
		typeLongExpression()

		cy.get('.components__Display-sc-16dqpkq-1').should(
			'have.text',
			'-3.600',
		)
	})

	// * Checking of "CE" button work
	it('it check "CE" button', () => {
		// Typing the expression '2+2='
		typeShortExpression()
		cy.get('.components__Display-sc-16dqpkq-1').should(
			'have.text',
			'4',
		)

		cy.get('button')
			.contains('CE')
			.click()

		cy.get('.components__Display-sc-16dqpkq-1').should(
			'be.empty',
		)
	})

	// * Checking of history and "Clear History" button work
	it('it check history and "Clear History" button', () => {
		// Typing the expression '2+2='
		typeShortExpression()
		cy.get('li').should('have.text', '2+2')

		cy.visit('/Settings')
		cy.get('button')
			.contains('Clear History')
			.click()

		cy.visit('/')
		cy.get('ul').should('be.empty')
	})

	// * Checking of "Clear History & Result" button work
	it('it check "Clear History & Result" button', () => {
		// Typing the expression '2+2=' and check result to equal '4'
		typeShortExpression()
		cy.get('li').should('have.text', '2+2')
		cy.get('.components__Display-sc-16dqpkq-1').should(
			'have.text',
			'4',
		)

		cy.visit('/Settings')

		cy.get('button')
			.contains('Clear History & Result')
			.click()

		cy.visit('/')

		cy.get('ul').should('be.empty')
		cy.get('.components__Display-sc-16dqpkq-1').should(
			'be.empty',
		)
	})
})
