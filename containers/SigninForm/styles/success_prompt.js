import styled from 'styled-components'

import Img from 'components/Img'
import { cs } from 'utils'

export const Wrapper = styled.div`
  ${cs.flexColumn('align-both')};
`
export const SuccessIcon = styled(Img)`
  fill: yellowgreen;
  width: 50px;
  height: 50px;
  display: block;
`
export const Text = styled.div`
  margin-top: 10px;
`
