import React from 'react'

import FormItem from 'components/FormItem'

import { Wrapper, ConfirmBtn } from './styles/verify_code_input'
import { inputOnChange } from './logic'

const VerifyCodeInput = ({ code }) => (
  <Wrapper>
    <FormItem
      size="default"
      placeholder="验证码"
      value={code}
      onChange={inputOnChange.bind(this, 'code')}
      bottom="0"
    />
    <ConfirmBtn>发送验证码</ConfirmBtn>
  </Wrapper>
)

export default VerifyCodeInput
