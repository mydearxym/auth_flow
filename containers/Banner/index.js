/*
 *
 * Banner
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'

import { makeDebugger, storePlug } from 'utils'

import init from './logic'

/* eslint-disable-next-line */
const debug = makeDebugger('C:Banner')

class BannerContainer extends React.Component {
  constructor(props) {
    super(props)

    const { banner } = props
    init(banner)
  }

  render() {
    // const { banner } = this.props

    return <h3>Banner</h3>
  }
}

export default inject(storePlug('banner'))(observer(BannerContainer))
