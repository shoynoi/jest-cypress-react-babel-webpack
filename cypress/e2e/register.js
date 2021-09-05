import {buildUser} from '../support/generator'

describe('registration', () => {
  it('should register a new user', () => {
    const user = buildUser()
    cy.visit('/')
    cy.findByRole('link', {name: /register/i}).click()
    cy.findByLabelText(/username/i).type(user.username)
    cy.findByLabelText(/password/i).type(user.password)
    cy.findByRole('button', {name: /submit/i}).click()
    cy.url().should('eq', `${Cypress.config().baseUrl}/`)
    cy.window()
      .its('localStorage.token')
      .should('be.a', 'string')
  })
})
