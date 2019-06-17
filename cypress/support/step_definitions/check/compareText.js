module.exports = (element1, falseCase, element2) => {
    cy.get(element1).invoke('text').then((text1) => {
        cy.get(element2).invoke('text').should((text2) => {
            if (falseCase === ' not') {
                expect(text1).not.to.eq(text2)
            } else {
                expect(text1).to.eq(text2)
            }
        })
    })
}