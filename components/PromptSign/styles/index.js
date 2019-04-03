import styled from 'styled-components'

import Img from 'components/Img'
import { cs } from 'utils'

export const Wrapper = styled.div.attrs(props => ({
  'data-testid': props.testid || 'prompt-sign',
}))`
  ${cs.flexColumn('align-both')};
`
export const SignIcon = styled(Img)`
  fill: yellowgreen;
  width: 50px;
  height: 50px;
  display: block;
`
export const Desc = styled.div`
  margin-top: 10px;
`
