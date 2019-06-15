/// <reference types="Cypress" />

module.exports = (falseCase, expectedTitle) => {
  // cy.title().as('Title')
  if (falseCase) {
    cy.title().should('not.include', expectedTitle)
  } else {
    cy.title().should('include', expectedTitle)
  }
}
