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
describe('test login button', () => {
  it('Visits the sign in page via "LOGIN" button on navbar', () => {
      cy.visit('http://localhost:3000/')

      cy.get('#btnLogin').click()

      cy.url().should('include', '/login')
  })
})

describe('test login function', () => {
  it('Tries to login with no credentials', () => {
      cy.visit('http://localhost:3000/login')

      cy.get('.btn').click()
  })
})

describe('test login function', () => {
  it('Tries to login with correct credentials', () => {
      cy.visit('http://localhost:3000/login')

      cy.get('#usernameInput')
          .type('Jaklin')
          .should('have.value', 'Jaklin')
      
      cy.get('#passwordInput')
          .type('jakito')
          .should('have.value', 'jakito')

      cy.get('#loginBtn').click()
})
})
