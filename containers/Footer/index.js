/*
 *
 * Footer
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'

import { makeDebugger, storePlug } from 'utils'

import { init } from './logic'

/* eslint-disable-next-line */
const debug = makeDebugger('C:Footer')

class FooterContainer extends React.Component {
  componentDidMount() {
    const { footer } = this.props
    init(footer)
  }

  render() {
    // const { footer } = this.props

    return (
      <React.Fragment>
        <h3>Footer</h3>
      </React.Fragment>
    )
  }
}

export default inject(storePlug('footer'))(observer(FooterContainer))
