module.exports = (element, falseCase) => {
    // const elements = cy.get(selector).value
    if (element.startsWith('./') || element.startsWith('/')) { // If element starts with either '//' or './/' treat it as an XPath
        cy.xpath(element).as('el')
    } else {
        cy.get(element).as('el')
    }

    if (falseCase === ' not') {
        cy.get('@el').should("not.exist")
    } else {
        cy.get('@el').should("exist")
    }
}