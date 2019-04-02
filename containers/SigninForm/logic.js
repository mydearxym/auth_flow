// import R from 'ramda'

import { makeDebugger, updateEditing, NET } from 'utils'

import { signIn } from './service'

let store = null

/* eslint-disable-next-line */
const debug = makeDebugger('L:LoginForm')

export const inputOnChange = (part, e) => updateEditing(store, part, e)

export async function signinConfirm() {
  const { formData, isValidPhone } = store
  if (!isValidPhone) {
    return store.toastError({ title: '登陆失败', msg: '请填写正确的手机号码' })
  }
  if (!store.validator('password')) {
    return store.toastError({ title: '登陆失败', msg: '请正确填写密码' })
  }

  const res = await signIn(formData)

  if (res.code === NET.ERR_CODE) {
    return console.log('signIn res fuck: ', res)
  }
  return console.log('signIn res ok: ', res)
}

// ###############################
// init & uninit
// ###############################

export const init = _store => {
  store = _store
}

export const uninit = () => {}
