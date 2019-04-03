import styled from 'styled-components'

import { Button } from 'antd'
// import Img from 'components/Img'
import { cs } from 'utils'

export const Wrapper = styled.div`
  ${cs.flexColumnGrow('align-both')};
  margin-top: -30px;
`

export const FormWrapper = styled.div`
  ${cs.flexColumn('align-both')};
  background: white;
  border: 1px solid;
  border-color: lightgrey;
  min-width: 300px;
  min-height: 55vh;
  padding: 20px 0;
`

export const Divider = styled.div`
  width: 80%;
  border-bottom: 1px solid;
  border-color: #f1f0f0;
  margin-top: 20px;
  margin-bottom: 20px;
`

export const SignupButton = styled(Button)`
  width: 80%;
`

export const RegisterButton = styled.div`
  margin-top: 5px;

  &:hover {
    cursor: pointer;
    font-weight: bold;
  }
`
