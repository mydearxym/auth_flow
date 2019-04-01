import React from 'react'

// import { ICON_CMD } from '../../config'
import FormItem from 'components/FormItem'
import PhoneNumInput from 'containers/PhoneNumInput'

import { Wrapper, Divider, FormTitle, Label, LabelHint } from './styles/forms'

import { inputOnChange } from './logic'

const Forms = ({ data: { password } }) => (
  <Wrapper>
    <PhoneNumInput />
    <Divider />
    <FormTitle>
      <Label>密码</Label>
      <LabelHint>忘记密码?</LabelHint>
    </FormTitle>
    <FormItem
      size="default"
      contentType="password"
      value={password}
      onChange={inputOnChange.bind(this, 'password')}
      bottom="0"
    />
  </Wrapper>
)

export default Forms
