module.exports = (elementType, element, falseCase, expectedText) => {
    if (element.startsWith('./') || element.startsWith('/')) { // If element starts with either '//' or './/' treat it as an XPath
        cy.xpath(element).as('el')
    } else {
        cy.get(element).as('el')
    }

    if (falseCase === ' not') {
        cy.get("@el").should('not.have.text', expectedText)
    } else {
        cy.get("@el").should('have.text', expectedText)
    }
}