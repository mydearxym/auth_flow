import React from 'react'

import FormItem from 'components/FormItem'

import { Wrapper, ConfirmBtn } from './styles/verification_code_input'

import { inputOnChange } from './logic'

const VerificationCodeInput = ({ verifyCode }) => (
  <Wrapper>
    <FormItem
      size="default"
      placeholder="验证码"
      value={verifyCode}
      onChange={inputOnChange.bind(this, 'verifyCode')}
      bottom="0"
    />
    <ConfirmBtn>发送验证码</ConfirmBtn>
  </Wrapper>
)

export default VerificationCodeInput
