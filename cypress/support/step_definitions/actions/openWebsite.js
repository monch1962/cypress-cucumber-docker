/// <reference types="Cypress" />

module.exports = (type, page) => {
  // const url = (type === 'url') ? page : browser.options.baseUrl + page
  const url = (type === 'url') ? page : process.env.ROOT_URL + page
  // cy.log('Navigating to URL: ' + url)
  cy.task('log', 'Navigating to URL: ' + url)
  cy.visit(url, {
    failOnStatusCode: false
  })
}