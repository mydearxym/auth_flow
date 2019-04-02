// import R from 'ramda'

import { makeDebugger, dispatchEvent, EVENT } from 'utils'

// import S from './schema'

/* eslint-disable-next-line */
const debug = makeDebugger('L:Footer2')

let store = null

export const toggleSponsorHelper = () =>
  store.markState({ showSponsor: !store.showSponsor })

export const toggleSeniorHelper = () => store.upgradeHepler()
export const toggleBusBanner = () =>
  store.markState({ showBusBanner: !store.showBusBanner })

export const onLogin = () => store.authWarning({ hideToast: true })
export const onPay = () => {
  if (!store.isLogin) return store.authWarning()
}

export const queryDoraemon = data =>
  dispatchEvent(EVENT.QUERY_DORAMON, { data })

// ###############################
// init & uninit handlers
// ###############################

export const init = _store => {
  store = _store
}
