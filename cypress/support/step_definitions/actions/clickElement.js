import checkIfElementExists from '../lib/checkIfElementExists';

/**
 * Perform an click action on the given element
 * @param  {String}   action  The action to perform (click or doubleClick)
 * @param  {String}   type    Type of the element (link or selector)
 * @param  {String}   element Element selector
 */
module.exports = (action, type, element) => {
    if (action === 'click') {
        cy.get(element).click()
    } else if (action === 'doubleclick') {
        cy.get(element).dblclick()
    }
}