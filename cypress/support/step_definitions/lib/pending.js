/// <reference types="Cypress" />


// This function exists to proxy steps that haven't been created yet.
// It doesn't seem to be possible yet to actually mark a step as 'pending', so this will 
// cause a test failure. That's good enough for now in that it doesn't let pending steps pass
module.exports = () => {
  // it.skip()
  it.pending()
}
