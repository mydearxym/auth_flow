/*
* SignupForm store
*
*/

import { types as t, getParent } from 'mobx-state-tree'
import R from 'ramda'

import { markStates, makeDebugger } from 'utils'
/* eslint-disable-next-line */
const debug = makeDebugger('S:SignupForm')

const SignupForm = t
  .model('SignupForm', {
    // 当前注册页面的种类，分别为 注册, 注册成功
    curView: t.optional(
      t.enumeration('curView', ['SIGNUP', 'SIGNUP_SUCCESS']),
      'SIGNUP'
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
      const { phone } = self.root.phoneNumInput
      const { password } = self

      return { phone, password }
    },
  }))
  .actions(self => ({
    toastError(options) {
      self.root.toast('error', R.merge({ position: 'topCenter' }, options))
    },
    toastDone(options) {
      self.root.toast('success', R.merge({ position: 'topCenter' }, options))
    },

    updateEditing(sobj) {
      return self.markState({ ...sobj })
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
        // 'password'
        default: {
          const { password } = self
          if (validPassword(password)) return true

          self.toastError({ title: '注册失败', msg: '请正确填写密码' })
          return false
        }
      }
    },
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default SignupForm
