import styled from 'styled-components'

import { cs } from 'utils'

export const Wrapper = styled.div`
  ${cs.flex('align-center')};
  margin-bottom: 15px;
`

export const Item = styled.div`
  &:hover {
    font-weight: bold;
    cursor: pointer;
  }
`
