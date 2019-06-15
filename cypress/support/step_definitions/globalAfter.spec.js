/// <reference types="Cypress" />

after(() => {
  cy.screenshot()
})
