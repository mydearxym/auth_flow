describe('sign_in page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/sign_in')
    /* cy.auth(user.id).then(() => cy.visit('/')); */
  })

  it.only('visit sign_in page', () => {
    cy.contains('手机号码').should('be.visible')
    cy.contains('发送验证码').should('be.visible')
    cy.contains('登陆').should('be.visible')
    cy.contains('注册平台账号').should('be.visible')

    cy.get('[data-testid=phone-num-input]').should('be.visible')
    cy.get('[data-testid=verify-code-input]').should('be.visible')

    cy.get('[data-testid=signin-confirm-btn]').should('be.visible')
  })

  it('link to sign_up page', () => {
    cy.get('[data-testid=signup-linker]').should('be.visible')
  })
})
