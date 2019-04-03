import React from 'react'

import FormItem from 'components/FormItem'

import { Wrapper, ConfirmBtn } from './styles/verify_code_input'
import { queryVerrifyCode, codeOnChange } from './logic'

const VerifyCodeInput = ({ code, counter, disable }) => (
  <Wrapper>
    <FormItem
      testid="phone-code-input"
      size="default"
      placeholder="验证码"
      value={code}
      onChange={codeOnChange}
      bottom="0"
    />
    {disable ? (
      <ConfirmBtn disabled={disable} testid="phone-code-resend-btn">
        重新发送(
        {counter}
        s)
      </ConfirmBtn>
    ) : (
      <ConfirmBtn onClick={queryVerrifyCode} testid="phone-code-btn">
        发送验证码
      </ConfirmBtn>
    )}
  </Wrapper>
)

export default VerifyCodeInput
