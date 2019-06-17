module.exports = (elementType, element, falseCase, expectedText) => {
    if (falseCase === ' not') {
        cy.get(element).should('not.have.text', expectedText)
    } else {
        cy.get(element).should('have.text', expectedText)
    }
}
