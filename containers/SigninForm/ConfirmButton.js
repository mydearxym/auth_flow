import React from 'react'

// import { ICON_CMD } from '../../config'
// import { Wrapper } from './styles'
import { SigninButton } from './styles'
import { signinConfirm, resetPassword } from './logic'

const ConfirmButton = ({ curView }) => {
  switch (curView) {
    case 'SIGNIN': {
      return (
        <SigninButton
          type="primary"
          onClick={signinConfirm}
          testid="signin-confirm-btn"
        >
          登陆
        </SigninButton>
      )
    }
    case 'FORGOT_PASS': {
      return (
        <React.Fragment>
          <SigninButton
            type="primary"
            onClick={resetPassword}
            testid="signin-confirm-btn"
          >
            确认修改
          </SigninButton>
        </React.Fragment>
      )
    }
    default: {
      return null
    }
  }
}

export default ConfirmButton
