/*
* SigninForm store
*
*/

import { types as t, getParent } from 'mobx-state-tree'
import R from 'ramda'

import { markStates, makeDebugger } from 'utils'
/* eslint-disable-next-line */
const debug = makeDebugger('S:SigninForm')

const SigninForm = t
  .model('SigninForm', {
    // 当前 signin form 的种类，分为 signin, 登陆成功, 忘记密码
    curView: t.optional(
      t.enumeration('curView', ['SIGNIN', 'SIGNIN_SUCCESS', 'FORGOT_PASS']),
      'SIGNIN'
    ),
    // 密码
    password: t.optional(t.string, ''),
    // 再次确认输入的密码
    password2: t.optional(t.string, ''),
  })
  .views(self => ({
    get root() {
      return getParent(self)
    },
    get isValidPhone() {
      const { isValidPhone } = self.root.phoneNumInput
      return isValidPhone
    },
    get formData() {
      const { phone } = self.root.phoneNumInput
      const { password, password2 } = self

      return { phone, password, password2 }
    },
  }))
  .actions(self => ({
    toastError(options) {
      self.root.toast('error', R.merge({ position: 'topCenter' }, options))
    },
    toastDone(options) {
      self.root.toast('success', R.merge({ position: 'topCenter' }, options))
    },
    validator(type) {
      const validPassword = R.compose(
        R.lte(6),
        R.length,
        R.trim
      )

      if (!self.isValidPhone) {
        self.toastError({ title: '登陆失败', msg: '请填写正确的手机号码' })
        return false
      }

      switch (type) {
        case 'passwordReset': {
          const { password, password2 } = self
          if (
            validPassword(password) &&
            validPassword(password) &&
            password === password2
          ) {
            return true
          }

          self.toastError({ title: '重置失败', msg: '请确保密码一致' })
          return false
        }
        // 'password'
        default: {
          const { password } = self
          if (validPassword(password)) return true

          self.toastError({ title: '登陆失败', msg: '请正确填写密码' })
          return false
        }
      }
    },
    updateEditing(sobj) {
      return self.markState({ ...sobj })
    },
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default SigninForm
