module.exports = (element, falseCase) => {
  if (falseCase) {
    cy.get(element).should('not.be.visible')
  } else {
    cy.get(element).should('be.visible')
  }
}
