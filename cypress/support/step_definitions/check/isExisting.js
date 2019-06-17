module.exports = (selector, falseCase) => {
    // const elements = cy.get(selector).value
    if (falseCase === ' not') {
        cy.get(selector).should("not.exist")
    } else {
        cy.get(selector).should("exist")
    }
}