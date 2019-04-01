/*
* PhoneNumInput store
*
*/

import { types as t, getParent } from 'mobx-state-tree'
// import R from 'ramda'

import { markStates, makeDebugger } from 'utils'
/* eslint-disable-next-line */
const debug = makeDebugger('S:PhoneNumInput')

const PhoneNumInput = t
  .model('PhoneNumInput', {
    phone: t.optional(t.string, ''),
    code: t.optional(t.string, ''),
  })
  .views(self => ({
    get root() {
      return getParent(self)
    },
    get formData() {
      const { phone, code } = self

      return { phone, code }
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

export default PhoneNumInput
