// import R from 'ramda'

import { makeDebugger, updateEditing, NET } from 'utils'

import S from './service'

let store = null

/* eslint-disable-next-line */
const debug = makeDebugger('L:SignupForm')

export const inputOnChange = (part, e) => updateEditing(store, part, e)

export async function signupConfirm() {
  if (!store.validator('password')) return false
  const { formData } = store

  const res = await S.signUp(formData)
  if (res.code === NET.ERR_CODE) {
    return store.toastError({ title: '注册失败', msg: res.message })
  }
  return store.markState({ curView: 'SIGNUP_SUCCESS' })
}

// const const cancleLoading = () => {}

// ###############################
// init & uninit handlers
// ###############################

export const init = _store => {
  store = _store
}

export const uninit = () => {
  store.markState({ curView: 'SIGNUP', password: '' })
}
