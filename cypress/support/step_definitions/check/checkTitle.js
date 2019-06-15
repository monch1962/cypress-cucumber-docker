/// <reference types="Cypress" />

module.exports = (falseCase, expectedTitle) => {
  // cy.title().as('Title')
  if (falseCase) {
    cy.title().should('eq', expectedTitle)
  } else {
    cy.title().should('not.eq', expectedTitle)
  }
}
