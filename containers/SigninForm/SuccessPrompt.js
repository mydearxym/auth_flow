import React from 'react'

import { ICON_BASE } from 'config'
import { Wrapper, SuccessIcon, Text } from './styles/success_prompt'

const SuccessPrompt = () => (
  <Wrapper>
    <SuccessIcon src={`${ICON_BASE}/success.svg`} />
    <Text>登陆成功，即将跳转</Text>
  </Wrapper>
)

export default SuccessPrompt
