/*
 * PhoneNumInput store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
import R from 'ramda'
import { markStates, makeDebugger } from 'utils'
/* eslint-disable-next-line */
const debug = makeDebugger('S:PhoneNumInput')

const PhoneNumInput = t
  .model('PhoneNumInput', {
    phone: t.optional(t.string, ''),
    code: t.optional(t.string, ''),

    // 手机号码是否合法, 只有通过验证码校验以后才设置为 true
    isValidPhone: t.optional(t.boolean, false),
    // 是否禁用发送验证码的按钮
    queryBtnDisable: t.optional(t.boolean, false),
    // 倒计时的 counter
    counter: t.optional(t.number, 60),
    // 倒计时的 counnter timmer
    counterTimer: t.maybeNull(t.number),
    // 手机运营商
    phoneCarrier: t.optional(t.string, ''),
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
    validator(type) {
      const validPhone = R.compose(
        R.equals(11),
        R.length,
        R.trim
      )

      if (type === 'phone') {
        const { phone } = self
        if (validPhone(phone)) return true

        return false
      }
    },
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default PhoneNumInput
