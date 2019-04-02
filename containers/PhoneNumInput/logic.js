// import R from 'ramda'

import { makeDebugger, updateEditing, NET } from 'utils'
import S from './service'

let store = null

/* eslint-disable-next-line */
const debug = makeDebugger('L:PhoneNumInput')

export const inputOnChange = (part, e) => updateEditing(store, part, e)

export const queryVerrifyCode = () => {
  if (!store.validator('phone')) {
    return store.toastError({ title: '发送失败', msg: '请填写正确的手机号码' })
  }
  startCounterLoop()
}

export async function phoneOnBlur() {
  const { phone } = store

  if (!store.validator('phone')) {
    return store.markState({ phoneCarrier: '' })
  }

  const res = await S.getPhoneInfo(phone)
  store.markState({ phoneCarrier: res.carrier })
}

export async function codeOnChange(e) {
  inputOnChange('code', e)
  const { phone, code, queryBtnDisable } = store
  if (!store.validator('phone') || !queryBtnDisable) return false

  if (code.length === 4) {
    const res = await S.verifyPhoneCode(phone, code)

    if (res.code === NET.SUCCESS_CODE)
      return store.markState({ isValidPhone: true })
  }
}

// 开始倒计时
const startCounterLoop = () => {
  const { counterTimer } = store
  if (counterTimer) clearInterval(counterTimer)

  const timer = setInterval(() => {
    const { counter } = store
    if (counter <= 1) return stopCounterLoop()

    store.markState({ counter: store.counter - 1 })
  }, 1000)

  store.markState({ queryBtnDisable: true, counterTimer: timer })
}

// 结束倒计时
const stopCounterLoop = () => {
  const { counterTimer } = store
  if (counterTimer) clearInterval(counterTimer)

  store.markState({ queryBtnDisable: false, counter: 60 })
}

// ###############################
// init & uninit
// ###############################
export const init = _store => {
  store = _store
}

export const uninit = () => {
  debug('uninit')
  store.reset()
}
