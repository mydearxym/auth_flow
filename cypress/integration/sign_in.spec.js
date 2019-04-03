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
    cy.get('[data-testid=phone-code-input]').should('be.visible')

    cy.get('[data-testid=signin-confirm-btn]').should('be.visible')
  })

  it('link to sign_up page', () => {
    cy.get('[data-testid=signup-linker]').should('be.visible')
  })

  it('type valid phone num should get carrier info', () => {
    const PHONE_NUM = '15982398614'
    cy.get('[data-testid=phone-num-input]')
      .type(PHONE_NUM)
      .should('have.value', PHONE_NUM)
      .blur()

    /*
    cy.server()
    cy.route({
      method: 'GET',
      url:
        'https://tcc.taobao.com/cc/json/mobile_tel_segment.htm?tel=15982398614',
    })
    */

    cy.get('[data-testid=phone-carrier-text]').contains('四川移动')
  })

  it('type invalid phone num should get empty carrier info', () => {
    const PHONE_NUM = '8888888888'
    cy.get('[data-testid=phone-num-input]')
      .type(PHONE_NUM)
      .should('have.value', PHONE_NUM)
      .blur()

    cy.get('[data-testid=phone-carrier-text]').should('not.exist')
  })

  it.only('signin flow should work', () => {
    const PHONE_NUM = '15982398614'
    cy.get('[data-testid=phone-num-input]')
      .type(PHONE_NUM)
      .blur()

    cy.get('[data-testid=phone-code-btn]').click()
    cy.get('[data-testid=phone-code-resend-btn]').should('be.visible')

    cy.get('[data-testid=phone-code-input]')
      .type('1234')
      .blur()

    cy.get('[data-testid=signin-password-input]').type('123456')
    cy.wait(1000)
    cy.get('[data-testid=signin-confirm-btn]').click()
    cy.get('[data-testid=signin-success-prompt]').should('be.visible')
  })
})
