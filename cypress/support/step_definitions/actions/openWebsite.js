module.exports = (type, page) => {
  // const url = (type === 'url') ? page : browser.options.baseUrl + page
  // cy.visit(url)
  cy.visit(page)
}
