/*
 *
 * SigninForm
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'
import Link from 'next/link'

import { makeDebugger, storePlug } from 'utils'

import Forms from './Forms'
import SuccessPrompt from './SuccessPrompt'

import {
  Wrapper,
  FormWrapper,
  Divider,
  SigninButton,
  RegisterButton,
} from './styles'

import { init, uninit, signinConfirm } from './logic'

/* eslint-disable-next-line */
const debug = makeDebugger('C:SigninForm')

class SigninFormContainer extends React.Component {
  componentDidMount() {
    const { signinForm } = this.props
    init(signinForm)
  }

  componentWillUnmount() {
    uninit()
  }

  render() {
    const { signinForm } = this.props
    const { formData } = signinForm

    return (
      <Wrapper>
        <FormWrapper>
          <h2>登陆交易平台</h2>
          <div>让买电像买菜一样简单</div>
          <Divider />
          <SuccessPrompt />
          <Forms data={formData} />
          <SigninButton
            type="primary"
            onClick={signinConfirm}
            testid="signin-confirm-btn"
          >
            登陆
          </SigninButton>
        </FormWrapper>

        <RegisterButton>
          <Link href="/sign_up">注册平台账号</Link>
        </RegisterButton>
      </Wrapper>
    )
  }
}

export default inject(storePlug('signinForm'))(observer(SigninFormContainer))
