import {buildUser} from '../support/generator'

describe('registration', () => {
  it('should register a new user', () => {
    const user = buildUser()
    cy.visit('/')
    cy.findByRole('link', {name: /register/i}).click()
    cy.findByLabelText(/username/i).type(user.username)
    cy.findByLabelText(/password/i).type(user.password)
    cy.findByRole('button', {name: /submit/i}).click()
    cy.assertHome()
    cy.assertLoggedInAs(user)
  })

  it("should show an error message if there's an error registering", () => {
    cy.server()
    cy.route({
      method: 'POST',
      url: 'http://localhost:3000/register',
      status: 500,
      response: {},
    })
    cy.visit('/register')
    cy.findByRole('button', {name: /submit/i}).click()
    cy.findByText(/error.*try again/i)
  })
})
