/*
 *
 * LoginForm
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'

import { makeDebugger, storePlug } from 'utils'

import { Wrapper } from './styles'

import * as logic from './logic'
/* eslint-disable-next-line */
const debug = makeDebugger('C:LoginForm')

class LoginFormContainer extends React.Component {
  componentDidMount() {
    const { loginForm } = this.props
    logic.init(loginForm)
  }

  componentWillUnmount() {
    logic.uninit()
  }

  render() {
    return (
      <Wrapper>
        <h2>LoginForm container!</h2>
        <div>impress me!</div>
      </Wrapper>
    )
  }
}

export default inject(storePlug('loginForm'))(observer(LoginFormContainer))
