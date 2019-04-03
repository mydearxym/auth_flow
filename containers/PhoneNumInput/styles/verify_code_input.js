import styled from 'styled-components'

import { Button } from 'antd'
// import Img from '../../../components/Img'
import { cs } from '../../../utils'

export const Wrapper = styled.div`
  ${cs.flex()};
`
export const ConfirmBtn = styled(Button).attrs(props => ({
  'data-testid': props.testid || 'confirm-btn',
}))`
  width: 50%;
  margin-left: 10px;
`
