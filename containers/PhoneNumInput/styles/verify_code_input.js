import styled from 'styled-components'

import { Button } from 'antd'
// import Img from '../../../components/Img'
import { cs } from '../../../utils'

export const Wrapper = styled.div`
  ${cs.flex()};
`
export const ConfirmBtn = styled(Button)`
  width: 50%;
  margin-left: 10px;
`
