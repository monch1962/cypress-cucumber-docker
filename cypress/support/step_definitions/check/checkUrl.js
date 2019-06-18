module.exports = (falseCase, expectedUrl) => {
    if (falseCase) {
      cy.url().should('not.equal', expectedUrl)
    } else {
      cy.url().should('equal', expectedUrl)
    }
  }
  