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
    // 当前 login form 的种类，分为 signin, 登陆成功, 忘记密码
    curView: t.optional(
      t.enumeration('curView', ['signin', 'signinSuccess', 'forgotPass']),
      'signin'
    ),
    // 密码
    password: t.optional(t.string, ''),
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
      const { password } = self
      const { phone } = self.root.phoneNumInput

      return { password, phone }
    },
  }))
  .actions(self => ({
    toastError(options) {
      self.root.toast('error', R.merge({ position: 'topCenter' }, options))
    },
    validator(type) {
      const validPassword = R.compose(
        R.lte(6),
        R.length,
        R.trim
      )

      switch (type) {
        // 'password'
        default: {
          const { password } = self
          if (validPassword(password)) return true

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
