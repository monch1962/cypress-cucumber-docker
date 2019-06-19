import checkIfElementExists from '../lib/checkIfElementExists';

/**
 * Set the value of the given input field to a new value or add a value to the
 * current element value
 * @param  {String}   method  The method to use (add or set)
 * @param  {String}   value   The value to set the element to
 * @param  {String}   element Element selector
 */
module.exports = (method, value, element) => {
    if (element.startsWith('./') || element.startsWith('/')) { // If element starts with either '//' or './/' treat it as an XPath
        cy.xpath(element).as('el')
    } else {
        cy.get(element).as('el')
    }

    var existingText = ''
    if (method === 'add') {
        existingText = cy.get("@el").invoke('text')
    }
    cy.get("@el").type(value)
}