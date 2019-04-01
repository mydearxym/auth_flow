/*
 *
 * Footer
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'

import { makeDebugger, storePlug } from 'utils'
import DotDivider from 'components/DotDivider'
import { Wrapper, Item } from './styles'

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
      <Wrapper>
        <Item>关于我们</Item>
        <DotDivider />
        <Item>权利与隐私</Item>
        <DotDivider />
        <Item>联系我们</Item>
      </Wrapper>
    )
  }
}

export default inject(storePlug('footer'))(observer(FooterContainer))
