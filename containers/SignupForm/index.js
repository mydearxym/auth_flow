/*
 *
 * SignupForm
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'
import Link from 'next/link'

import { makeDebugger, storePlug } from 'utils'

import PromptSign from 'components/PromptSign'

import {
  Wrapper,
  FormWrapper,
  Divider,
  SignupButton,
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
    const { formData, curView } = signupForm

    return (
      <Wrapper>
        <FormWrapper>
          <h2>注册交易平台</h2>
          <div>让买电像买菜一样简单</div>
          <Divider />
          {curView === 'SIGNUP_SUCCESS' ? (
            <PromptSign desc="注册成功，欢迎光临" />
          ) : (
            <Forms data={formData} />
          )}
          {curView === 'SIGNUP' && (
            <SignupButton type="primary" onClick={signupConfirm}>
              注册
            </SignupButton>
          )}
        </FormWrapper>
        <RegisterButton>
          <Link href="/">登陆已有账号</Link>
        </RegisterButton>
      </Wrapper>
    )
  }
}

export default inject(storePlug('signupForm'))(observer(SignupFormContainer))
