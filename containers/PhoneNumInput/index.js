/*
 *
 * PhoneNumInput
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'

import { makeDebugger, storePlug } from 'utils'

import FormItem from 'components/FormItem'
import VerifyCodeInput from './VerifyCodeInput'

import { Wrapper, Divider, FormTitle, Label, LabelHint } from './styles'
import { init, uninit, inputOnChange } from './logic'

/* eslint-disable-next-line */
const debug = makeDebugger('C:PhoneNumInput')

class PhoneNumInputContainer extends React.Component {
  componentDidMount() {
    const { phoneNumInput } = this.props
    init(phoneNumInput)
  }

  componentWillUnmount() {
    uninit()
  }

  render() {
    const { phoneNumInput } = this.props
    const { phone, code } = phoneNumInput

    return (
      <Wrapper>
        <FormTitle>
          <Label>手机号码</Label>
          <LabelHint>联通</LabelHint>
        </FormTitle>
        <FormItem
          size="default"
          value={phone}
          onChange={inputOnChange.bind(this, 'phone')}
          bottom="0"
        />
        <Divider />
        <VerifyCodeInput code={code} />
      </Wrapper>
    )
  }
}

export default inject(storePlug('phoneNumInput'))(
  observer(PhoneNumInputContainer)
)
