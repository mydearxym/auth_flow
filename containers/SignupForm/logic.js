// import R from 'ramda'

import { makeDebugger, updateEditing } from 'utils'

// import S from './schema'

let store = null

/* eslint-disable-next-line */
const debug = makeDebugger('L:SignupForm')

export const inputOnChange = (part, e) => updateEditing(store, part, e)

export const signupConfirm = () => {
  const { accountName, passport } = store

  debug('signupConfirm accountName: ', accountName)
  debug('signupConfirm passport: ', passport)
}

// const const cancleLoading = () => {}

// ###############################
// init & uninit handlers
// ###############################

export const init = _store => {
  store = _store
}

export const uninit = () => {}
