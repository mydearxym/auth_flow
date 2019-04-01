describe('first', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    /* cy.auth(user.id).then(() => cy.visit('/')); */
  })

  it('visit the site', () => {
    cy.get('[data-cy=phone-num-input]').should('be.visible')
    cy.get('[data-cy=verify-code-input]').should('be.visible')
  })
})
