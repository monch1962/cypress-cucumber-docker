module.exports = (element1, falseCase, element2) => {
    if (element1.startsWith('./') || element1.startsWith('/')) { // If element starts with either '//' or './/' treat it as an XPath
        cy.xpath(element1).as('el1')
    } else {
        cy.get(element1).as('el1')
    }
    if (element2.startsWith('./') || element2.startsWith('/')) { // If element starts with either '//' or './/' treat it as an XPath
        cy.xpath(element2).as('el1')
    } else {
        cy.get(element2).as('el1')
    }
    cy.get('@el1').invoke('text').then((text1) => {
        cy.get('@el2').invoke('text').should((text2) => {
            if (falseCase === ' not') {
                expect(text1).not.to.eq(text2)
            } else {
                expect(text1).to.eq(text2)
            }
        })
    })
}