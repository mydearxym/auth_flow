/*
 *
 * LoginForm
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'

import { makeDebugger, storePlug } from 'utils'

import {
  Wrapper,
  FormWrapper,
  Divider,
  LoginButton,
  RegisterButton,
} from './styles'

import Forms from './Forms'

import { init, uninit, loginConfirm } from './logic'

/* eslint-disable-next-line */
const debug = makeDebugger('C:LoginForm')

class LoginFormContainer extends React.Component {
  componentDidMount() {
    const { loginForm } = this.props
    init(loginForm)
  }

  componentWillUnmount() {
    uninit()
  }

  render() {
    const { loginForm } = this.props
    const { formData } = loginForm

    return (
      <Wrapper>
        <FormWrapper>
          <h2>登陆交易平台</h2>
          <div>让买电像买菜一样简单</div>
          <Divider />
          <Forms data={formData} />
          <LoginButton type="primary" onClick={loginConfirm}>
            登陆
          </LoginButton>
        </FormWrapper>
        <RegisterButton>注册平台账号</RegisterButton>
      </Wrapper>
    )
  }
}

export default inject(storePlug('loginForm'))(observer(LoginFormContainer))
