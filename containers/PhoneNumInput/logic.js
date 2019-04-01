// import R from 'ramda'

import {
  makeDebugger,
  $solver,
  asyncErr,
  ERR,
  errRescue,
  updateEditing,
} from 'utils'

import SR71 from 'utils/async/sr71'

import { getPhoneInfo } from './service'
// import S from './schema'

const sr71$ = new SR71()
let sub$ = null
let store = null

/* eslint-disable-next-line */
const debug = makeDebugger('L:PhoneNumInput')

export const inputOnChange = (part, e) => updateEditing(store, part, e)

export const queryVerrifyCode = () => {
  // const { phone, code } = store
  if (!store.validator('phone')) {
    return store.toastError({ title: '发送失败', msg: '请填写手机号码' })
  }
  /* debug('queryVerrifyCode phone: ', phone) */
  /* debug('queryVerrifyCode code: ', code) */
  debug('do loop')
  startCounterLoop()
}

export async function phoneOnBlur() {
  const { phone } = store

  if (!store.validator('phone')) {
    store.markState({ phoneCarrier: '' })
    return false
  }

  const res = await getPhoneInfo(phone)
  debug('phoneOnBlur: ', res.carrier)
  store.markState({ phoneCarrier: res.carrier })
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
// Data & Error handlers
// ###############################

const DataSolver = []
const ErrSolver = [
  {
    match: asyncErr(ERR.GRAPHQL),
    action: () => {
      // cancleLoading()
    },
  },
  {
    match: asyncErr(ERR.TIMEOUT),
    action: ({ details }) => {
      // cancleLoading()
      errRescue({ type: ERR.TIMEOUT, details, path: 'PhoneNumInput' })
    },
  },
  {
    match: asyncErr(ERR.NETWORK),
    action: () => {
      // cancleLoading()
      errRescue({ type: ERR.NETWORK, path: 'PhoneNumInput' })
    },
  },
]

export const init = _store => {
  store = _store

  debug(store)
  if (sub$) return false
  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
}

export const uninit = () => {
  if (!sub$) return false
  debug('===== do uninit')
  sr71$.stop()
  sub$.unsubscribe()
  sub$ = null
}
