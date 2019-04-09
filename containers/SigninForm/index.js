/*
 *
 * SigninForm
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'
import Link from 'next/link'

import { makeDebugger, storePlug } from 'utils'

import PromptSign from 'components/PromptSign'
import Forms from './Forms'
import ConfirmButton from './ConfirmButton'

import { Wrapper, FormWrapper, Divider, RegisterButton } from './styles'
import { init, uninit } from './logic'

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
    const { formData, curView } = signinForm
    const subSystem = '交易平台.'

    return (
      <Wrapper>
        <FormWrapper>
          <h2>{`登陆${subSystem}`}</h2>
          <div>让买电像买菜一样简单</div>
          <Divider />
          {curView === 'SIGNIN_SUCCESS' ? (
            <PromptSign
              desc="登陆成功，即将跳转"
              testid="signin-success-prompt"
            />
          ) : (
            <Forms data={formData} curView={curView} />
          )}

          <ConfirmButton curView={curView} />
        </FormWrapper>

        {curView === 'SIGNIN' && (
          <RegisterButton testid="signup-linker">
            <Link href="/sign_up">注册平台账号</Link>
          </RegisterButton>
        )}
      </Wrapper>
    )
  }
}

export default inject(storePlug('signinForm'))(observer(SigninFormContainer))
