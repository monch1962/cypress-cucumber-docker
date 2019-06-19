// import checkIfElementExists from '../lib/checkIfElementExists'

/**
 * Perform an click action on the given element
 * @param  {String}   action  The action to perform (click or doubleClick)
 * @param  {String}   type    Type of the element (link or selector)
 * @param  {String}   element Element selector
 */
module.exports = (action, type, element) => {
    if (element.startsWith('./') || element.startsWith('/')) { // If element starts with either '//' or './/' treat it as an XPath
        cy.xpath(element).as('el')
    } else {
        cy.get(element).as('el')
    }
    if (action === 'click') {
        cy.get('@el').click({
            force: true
        })
    } else {
        cy.get('@el').dblclick({
            force: true
        })
    }
}