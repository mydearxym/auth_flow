/*
* SigninForm store
*
*/

import { types as t, getParent } from 'mobx-state-tree'
// import R from 'ramda'

import { markStates, makeDebugger } from 'utils'
/* eslint-disable-next-line */
const debug = makeDebugger('S:SigninForm')

const SigninForm = t
  .model('SigninForm', {
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
    updateEditing(sobj) {
      return self.markState({ ...sobj })
    },
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default SigninForm
