/*
 *
 * PromptSign
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import { ICON_BASE } from 'config'
import { makeDebugger } from 'utils'

import { Wrapper, SignIcon, Desc } from './styles'

/* eslint-disable-next-line */
const debug = makeDebugger('c:PromptSign:index')

const PromptSign = ({ desc, testid }) => (
  <Wrapper testid={testid}>
    <SignIcon src={`${ICON_BASE}/success.svg`} />
    <Desc>{desc}</Desc>
  </Wrapper>
)

PromptSign.propTypes = {
  desc: PropTypes.string,
  testid: PropTypes.string,
  // type: PropTypes.oneOf(['success', 'error', 'warn']),
}

PromptSign.defaultProps = {
  desc: '操作成功',
  testid: 'prompt-sing',
  // type: 'success',
}

export default React.memo(PromptSign)
