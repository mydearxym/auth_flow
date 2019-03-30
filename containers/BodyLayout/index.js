/*
 *
 * BodyLayout
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'
import keydown from 'react-keydown'

// import Link from 'next/link'
import { storePlug } from 'utils'

import { Wrapper } from './styles'
import * as logic from './logic'

class BodyLayoutContainer extends React.Component {
  constructor(props) {
    super(props)

    const { bodylayout } = props
    logic.init(bodylayout)
  }

  /* eslint-disable class-methods-use-this */
  @keydown(['ctrl+p'])
  openDoraemon() {
    // debug('openDoraemon')
    logic.openDoraemon()
  }
  /* eslint-enable class-methods-use-this */

  render() {
    const { children } = this.props

    return <Wrapper>{children}</Wrapper>
  }
}

BodyLayoutContainer.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
}

BodyLayoutContainer.defaultProps = {
  children: <div />,
}

export default inject(storePlug('bodylayout'))(observer(BodyLayoutContainer))
