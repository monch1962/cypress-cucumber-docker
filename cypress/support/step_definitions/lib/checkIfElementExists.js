module.exports = (element, falseCase, exactly) => {
  // cy.get(element).should('have.length', exactly)
  // if (falseCase === true) {
  //   cy.get(element).should('have.length', 0)
  // } else if (exactly) {
  //   cy.get(element).should('have.length', exactly)
  // } else {
  //   cy.get(element).should('have.length', 1)
  // }
  cy.get(element).should("exist")
}
