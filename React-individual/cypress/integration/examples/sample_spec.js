describe('My First Test', () => {
    it('Does not do much!', () => {
      expect(true).to.equal(true)
    })
  })
  describe('Visit website test', () => {
    it('Visits the Matchpoint', () => {
      cy.visit('http://localhost:3000/')
    })
  })
  describe('My First Test', () => {
    it('finds the content "type"', () => {
      cy.visit('https://example.cypress.io')
  
      cy.contains('type')
    })
  })
  describe('Visit url test', () => {
    it('clicks the link "button"', () => {
      cy.visit('https://example.cypress.io')
  
      cy.contains('button').click()
    })
  })
  describe('Go to page test', () => {
    it('clicking "button" navigates to a new url', () => {
      cy.visit('http://localhost:3000')
  
      cy.contains('button').click('http://localhost:3000/products')
  
      // Should be on a new URL 
      cy.url().should('include', '/products')
    })
  })
  describe('Login test', () => {
    it('Gets, types and asserts', () => {
      cy.visit('http://localhost:3000')
  
      cy.contains('submit').click()
  
      // Should be on a new URL which includes '/commands/actions'
      cy.url().should('include', '/login')
  
      // Get an input, type into it and verify that the value has been updated
      cy.get('.action-email')
        .type('fake@email.com')
        .should('have.value', 'fake@email.com')
    })
  })