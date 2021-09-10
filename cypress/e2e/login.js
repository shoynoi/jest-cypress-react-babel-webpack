describe('login', () => {
  it('should login an existing user', () => {
    cy.createUser().then(user => {
      cy.visit('/')
      cy.findByRole('link', {name: /login/i}).click()
      cy.findByLabelText(/username/i).type(user.username)
      cy.findByLabelText(/password/i).type(user.password)
      cy.findByRole('button', {name: /submit/i}).click()
      cy.assertHome()
      cy.assertLoggedInAs(user)
    })
  })
})
