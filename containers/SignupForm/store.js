/*
* SignupForm store
*
*/

import { types as t, getParent } from 'mobx-state-tree'
// import R from 'ramda'

import { markStates, makeDebugger } from 'utils'
/* eslint-disable-next-line */
const debug = makeDebugger('S:SignupForm')

const SignupForm = t
  .model('SignupForm', {})
  .views(self => ({
    get root() {
      return getParent(self)
    },

    get formData() {
      // const { accountName, passport } = self

      // return { accountName, passport }
      return {}
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

export default SignupForm