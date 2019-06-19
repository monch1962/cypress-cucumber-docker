// import checkIfElementExists from '../lib/checkIfElementExists'

/**
 * Perform an click action on the given element
 * @param  {String}   action  The action to perform (click or doubleClick)
 * @param  {String}   type    Type of the element (link or selector)
 * @param  {String}   element Element selector
 */
module.exports = (action, type, text) => {
    if (action === 'click') {
        cy.contains(text).click()
    } else if (action === 'doubleclick') {
        cy.contains(text).dblclick()
    }
}