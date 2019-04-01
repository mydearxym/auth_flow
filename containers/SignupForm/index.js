/*
 *
 * SignupForm
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'
import Link from 'next/link'

import { makeDebugger, storePlug } from 'utils'

import {
  Wrapper,
  FormWrapper,
  Divider,
  LoginButton,
  RegisterButton,
} from './styles'

import Forms from './Forms'

import { init, uninit, signupConfirm } from './logic'

/* eslint-disable-next-line */
const debug = makeDebugger('C:SignupForm')

class SignupFormContainer extends React.Component {
  componentDidMount() {
    const { signupForm } = this.props
    init(signupForm)
  }

  componentWillUnmount() {
    uninit()
  }

  render() {
    const { signupForm } = this.props
    const { formData } = signupForm

    return (
      <Wrapper>
        <FormWrapper>
          <h2>注册交易平台</h2>
          <div>让买电像买菜一样简单</div>
          <Divider />
          <Forms data={formData} />
          <LoginButton type="primary" onClick={signupConfirm}>
            注册
          </LoginButton>
        </FormWrapper>
        <RegisterButton>
          <Link href="/">登陆已有账号</Link>
        </RegisterButton>
      </Wrapper>
    )
  }
}

export default inject(storePlug('signupForm'))(observer(SignupFormContainer))
