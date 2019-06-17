/// <reference types="Cypress" />

module.exports = (element, falseCase) => {
    if (falseCase) {
      cy.get(element).should('not.be.enabled')
    } else {
      cy.get(element).should('be.enabled')
    }
  }
  