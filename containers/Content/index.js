/*
 *
 * Content
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'

import { makeDebugger, storePlug } from 'utils'

import { Wrapper } from './styles'
import * as logic from './logic'

/* eslint-disable-next-line */
const debug = makeDebugger('C:Content')

class ContentContainer extends React.Component {
  constructor(props) {
    super(props)

    const { content } = props
    logic.init(content)
  }

  render() {
    // const { content } = this.props
    // const { curRoute } = content

    //    debug('curRoute: ', curRoute)
    return (
      <Wrapper>
        <h3>content</h3>
      </Wrapper>
    )
  }
}

export default inject(storePlug('content'))(observer(ContentContainer))
