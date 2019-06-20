module.exports = (element, falseCase, exactly) => {
  // cy.get(element).should('have.length', exactly)
  // if (falseCase === true) {
  //   cy.get(element).should('have.length', 0)
  // } else if (exactly) {
  //   cy.get(element).should('have.length', exactly)
  // } else {
  //   cy.get(element).should('have.length', 1)
  // }
  if (element.startsWith('./') || element.startsWith('/')) { // If element starts with either '//' or './/' treat it as an XPath
    cy.xpath(element).as('el')
  } else {
    cy.get(element).as('el')
  }

  if (falseCase === ' not') {
    cy.get('@el').should('not.exist')
  } else {
    cy.get('@el').should("exist")
  }
}