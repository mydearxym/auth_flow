import React from 'react'

import FormItem from 'components/FormItem'
import PhoneNumInput from 'containers/PhoneNumInput'
import { Wrapper, Divider, FormTitle, Label, LabelHint } from './styles/forms'

import { inputOnChange } from './logic'

const Forms = ({ data: { passport } }) => (
  <Wrapper>
    <PhoneNumInput />
    <Divider />
    <FormTitle>
      <Label>密码</Label>
      <LabelHint>--</LabelHint>
    </FormTitle>
    <FormItem
      size="default"
      contentType="password"
      value={passport}
      onChange={inputOnChange.bind(this, 'passport')}
      bottom="0"
    />
  </Wrapper>
)

export default Forms
