/* eslint-disable global-require */
const C = require('../constants')

const signin = ({ body: { password } }, res) => {
  if (password === C.BAD_SIGN_PASSWORD) {
    return res.json({
      code: C.ERR_CODE,
      message: '登陆失败',
      data: null,
    })
  }

  return res.json({
    code: C.SUCCESS_CODE,
    message: '请求成功',
    data: 'hello',
  })
}

const signup = ({ body: { password } }, res) => {
  if (password === C.BAD_SIGN_PASSWORD) {
    return res.json({
      code: C.ERR_CODE,
      message: '注册失败',
      data: null,
    })
  }

  return res.json({
    code: C.SUCCESS_CODE,
    message: '注册成功',
    data: 'hello',
  })
}

const resetPassword = ({ body: { password } }, res) => {
  if (password === C.BAD_SIGN_PASSWORD) {
    return res.json({
      code: C.ERR_CODE,
      message: '重置失败',
      data: null,
    })
  }

  return res.json({
    code: C.SUCCESS_CODE,
    message: '重置成功',
    data: 'hello',
  })
}

const verifyPhoneCode = ({ query: { code } }, res) => {
  if (code === C.BAD_PHONE_CODE) {
    return res.json({
      code: C.ERR_CODE,
      message: 'code 非法',
      data: null,
    })
  }

  return res.json({
    code: C.SUCCESS_CODE,
    message: 'code合法',
    data: 'hello',
  })
}
/* eslint-enable global-require */

module.exports = {
  signin,
  signup,
  resetPassword,
  verifyPhoneCode,
}
