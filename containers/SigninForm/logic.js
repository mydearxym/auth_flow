// import R from 'ramda'

import { makeDebugger, updateEditing } from 'utils'

import { signIn } from './service'

let store = null

/* eslint-disable-next-line */
const debug = makeDebugger('L:LoginForm')

export const inputOnChange = (part, e) => updateEditing(store, part, e)

export async function signinConfirm() {
  const { formData, isValidPhone } = store

  debug('signinConfirm isValidPhone: ', isValidPhone)
  debug('signinConfirm formData: ', formData)

  const res = await signIn(formData)

  console.log('signIn res: ', res)
}

// ###############################
// init & uninit
// ###############################

export const init = _store => {
  store = _store
}

export const uninit = () => {}
