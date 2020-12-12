/// <reference types="cypress" />

const values = require('../../fixtures/example')

context('Counter', () => {
	beforeEach(() => {
		cy.visit(values.homeURL)
	})

	it('Test counter', () => {
		cy.get('.container-fluid').should('be.visible')
		cy.get("[data-cy='btn-increment']").click()
		cy.get("[data-cy='counter']").contains('1')
		cy.get("[data-cy='btn-reset']").click()
		cy.get("[data-cy='counter']").contains('0')
	})
})
