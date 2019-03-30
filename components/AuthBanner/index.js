/*
 *
 * AuthBanner
 *
 */

import React from 'react'
// import PropTypes from 'prop-types'

import { makeDebugger } from 'utils'

import { Wrapper } from './styles'

/* eslint-disable-next-line */
const debug = makeDebugger('c:AuthBanner:index')

const AuthBanner = () => {
  return <Wrapper>AuthBanner component</Wrapper>
}

AuthBanner.propTypes = {}

AuthBanner.defaultProps = {}

export default React.memo(AuthBanner)
