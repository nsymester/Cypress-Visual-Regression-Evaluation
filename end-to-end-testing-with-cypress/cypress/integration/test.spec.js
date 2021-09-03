/// <reference types="cypress" />

it('loads the home page', () => {
	cy.visit('/index.html')

	cy.contains('h1', 'This page is tested')

	cy.get('[data-test]').click()

	cy.contains('h1', 'About')

	cy.get('.load-character').click()

	cy.get('.loaded-data').within(()=>{
		cy.get('h2').should('exist').and('not.contain', 'Want to see some Rick and Morty?')
		cy.get('.character-image').should('exist')
	})
})