import React from 'react'
// import { ICON_CMD } from '../../config'
import FormItem from 'components/FormItem'
import PhoneNumInput from 'containers/PhoneNumInput'

import { Wrapper, Divider, FormTitle, Label, LabelHint } from './styles/forms'

import { inputOnChange, forgotPassword } from './logic'

const ForgotForm = ({ password, password2 }) => (
  <Wrapper>
    <PhoneNumInput />
    <Divider />
    <FormTitle>
      <Label>密码</Label>
    </FormTitle>
    <FormItem
      size="default"
      contentType="password"
      value={password}
      onChange={inputOnChange.bind(this, 'password')}
      bottom="0"
    />
    <Divider />
    <FormTitle>
      <Label>确认密码</Label>
    </FormTitle>
    <FormItem
      size="default"
      contentType="password"
      value={password2}
      onChange={inputOnChange.bind(this, 'password2')}
      bottom="0"
    />
  </Wrapper>
)

const NormalForm = ({ password }) => (
  <Wrapper>
    <PhoneNumInput />
    <Divider />
    <FormTitle>
      <Label>密码</Label>
      <LabelHint onClick={forgotPassword}>忘记密码?</LabelHint>
    </FormTitle>
    <FormItem
      size="default"
      contentType="password"
      value={password}
      onChange={inputOnChange.bind(this, 'password')}
      bottom="0"
      testid="signin-password-input"
    />
  </Wrapper>
)

const Forms = ({ data: { password, password2 }, curView }) => {
  switch (curView) {
    case 'FORGOT_PASS': {
      return <ForgotForm password={password} password2={password2} />
    }
    default: {
      return <NormalForm password={password} />
    }
  }
}

export default Forms
