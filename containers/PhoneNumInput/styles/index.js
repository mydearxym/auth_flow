import styled from 'styled-components'

// import Img from 'components/Img'
import { cs } from 'utils'

export const Wrapper = styled.div``

export const Divider = styled.div`
  margin-top: 8px;
  margin-bottom: 8px;
`
export const FormTitle = styled.div`
  ${cs.flex('align-center')};
  justify-content: space-between;
  margin-bottom: 6px;
  font-size: 0.8rem;
`
export const Label = styled.div``
export const LabelHint = styled.div`
  opacity: 0.6;
  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`
