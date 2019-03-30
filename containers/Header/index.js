/*
 *
 * Header
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'
import keydown from 'react-keydown'

import { makeDebugger, storePlug } from 'utils'

import * as logic from './logic'

/* eslint-disable-next-line */
const debug = makeDebugger('C:Header')

class HeaderContainer extends React.Component {
  componentDidMount() {
    const { header } = this.props
    logic.init(header)
  }

  componentWillUnmount() {
    logic.uninit()
  }

  /* eslint-disable class-methods-use-this */
  @keydown(['ctrl+p'])
  openDoraemon() {
    // debug('openDoraemon')
    logic.openDoraemon()
  }
  /* eslint-enable class-methods-use-this */

  render() {
    // const { header } = this.props

    return (
      <React.Fragment>
        <h3>this is Header</h3>
      </React.Fragment>
    )
  }
}

export default inject(storePlug('header'))(observer(HeaderContainer))
