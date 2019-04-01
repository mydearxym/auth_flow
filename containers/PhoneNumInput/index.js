/*
 *
 * PhoneNumInput
 *
 */

import React from 'react'
import R from 'ramda'
import { inject, observer } from 'mobx-react'

import { makeDebugger, storePlug } from 'utils'

import FormItem from 'components/FormItem'
import VerifyCodeInput from './VerifyCodeInput'

import { Wrapper, Divider, FormTitle, Label, LabelHint } from './styles'
import { init, uninit, inputOnChange, phoneOnBlur } from './logic'

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
    const {
      phone,
      code,
      queryBtnDisable,
      counter,
      phoneCarrier,
    } = phoneNumInput

    return (
      <Wrapper>
        <FormTitle>
          <Label>手机号码.</Label>
          {!R.isEmpty(phoneCarrier) && <LabelHint>{phoneCarrier}</LabelHint>}
        </FormTitle>
        <FormItem
          dataCy="phone-num-input"
          size="default"
          value={phone}
          onChange={inputOnChange.bind(this, 'phone')}
          onBlur={phoneOnBlur}
          bottom="0"
        />
        <Divider />
        <VerifyCodeInput
          code={code}
          counter={counter}
          disable={queryBtnDisable}
        />
      </Wrapper>
    )
  }
}

export default inject(storePlug('phoneNumInput'))(
  observer(PhoneNumInputContainer)
)
