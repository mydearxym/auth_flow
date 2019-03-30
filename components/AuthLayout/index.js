/*
 *
 * AuthLayout
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import { makeDebugger } from 'utils'

import { Wrapper } from './styles'

/* eslint-disable-next-line */
const debug = makeDebugger('c:AuthLayout:index')

const AuthLayout = ({ children }) => <Wrapper>{children}</Wrapper>

AuthLayout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
}

AuthLayout.defaultProps = {
  children: <div />,
}

export default React.memo(AuthLayout)
