/*
* LoginForm store
*
*/

import { types as t, getParent } from 'mobx-state-tree'
// import R from 'ramda'

import { markStates, makeDebugger } from 'utils'
/* eslint-disable-next-line */
const debug = makeDebugger('S:LoginForm')

const LoginForm = t
  .model('LoginForm', {
    // username or email
    accountName: t.optional(t.string, ''),
    passport: t.optional(t.string, ''),
  })
  .views(self => ({
    get root() {
      return getParent(self)
    },

    get formData() {
      const { accountName, passport } = self

      return { accountName, passport }
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

export default LoginForm
