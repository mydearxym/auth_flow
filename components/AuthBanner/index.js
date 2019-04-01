/*
 *
 * AuthBanner
 *
 */

import React from 'react'
// import PropTypes from 'prop-types'

import { ICON_BASE } from 'config'
import { makeDebugger } from 'utils'

import { Wrapper, CompanyLogo } from './styles'

/* eslint-disable-next-line */
const debug = makeDebugger('c:AuthBanner:index')

const AuthBanner = () => (
  <Wrapper>
    <CompanyLogo src={`${ICON_BASE}/wanyi.png`} />
  </Wrapper>
)

AuthBanner.propTypes = {}

AuthBanner.defaultProps = {}

export default React.memo(AuthBanner)
