/// <reference types="Cypress" />

module.exports = () => {
  if (process.env.CYPRESS != 0) {
    cy.log('Blah')
  } else if (process.env.SELENIUM != 0) {
    pending
  } else {
    pending
  }
}