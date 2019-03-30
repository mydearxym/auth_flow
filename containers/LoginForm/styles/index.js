import styled from 'styled-components'

// import Img from 'components/Img'
import { cs } from 'utils'

export const Wrapper = styled.div`
  ${cs.flexColumnGrow('justify-center')};
`
export const FormWrapper = styled.div`
  ${cs.flexColumn('align-both')};
  background: white;
  border: 1px solid;
  border-color: lightgrey;
  min-width: 300px;
  min-height: 60vh;
`
