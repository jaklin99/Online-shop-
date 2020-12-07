describe('The Home Page', () => {
    it('successfully loads', () => {
      cy.visit('http://localhost:3000') // change URL to match your dev URL
    })
  })
describe('My First Test', () => {
    it('clicks the link "button"', () => {
      cy.visit('http://localhost:3000/login')
  
      cy.get('.btn').click()
    })
})

describe('My First Test', () => {
  it('clicking "button" navigates to a new url', () => {
    cy.visit('http://localhost:3000/login')

    cy.get('.btn').click()

    // Should be on a new URL which includes '/commands/actions'
    cy.url().should('include', '/')
  })
})
// describe('My First Test', () => {
//   it('clicking "button" navigates to a new url', () => {
//     cy.visit('http://localhost:3000/login')

//     cy.get('.a').click()

//     // Should be on a new URL which includes '/commands/actions'
//     cy.url().should('include', '/register')
//   })
// })
describe('When NOT in Chrome', { browser: '!chrome' }, () => {
  it('Shows warning', () => {
    cy.get('.browser-warning')
      .should('contain', 'For optimal viewing, use Chrome browser')
  })
  it('Links to browser compatibility doc', () => {
    cy.get('a.browser-compat')
      .should('have.attr', 'href')
      .and('include', 'browser-compatibility')
  })
})
describe('My First Test', () => {
  it('clicking "button" navigates to a new url', () => {
    cy.visit('http://localhost:3000/register')

    cy.get('.btn').click()

    // Should be on a new URL which includes '/commands/actions'
    cy.url().should('include', '/')
  })
})
// describe('My First Test', () => {
//   it('Gets, types and asserts', () => {
//     cy.visit('http://localhost:3000/account:email')

//     cy.get('.btn').click()
//   })
// })