/// <reference types="Cypress" />

module.exports = (element, falseCase) => {
  if (element.startsWith('./') || element.startsWith('/')) { // If element starts with either '//' or './/' treat it as an XPath
    cy.xpath(element).as('el')
  } else {
    cy.get(element).as('el')
  }
  if (falseCase) {
    cy.get('@el').should('not.be.visible')
  } else {
    cy.get('@el').should('be.visible')
  }
}