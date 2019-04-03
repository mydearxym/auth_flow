// import R from 'ramda'

import { makeDebugger, updateEditing, NET } from 'utils'

import S from './service'

let store = null

/* eslint-disable-next-line */
const debug = makeDebugger('L:LoginForm')

export const inputOnChange = (part, e) => updateEditing(store, part, e)

export async function signinConfirm() {
  if (!store.validator('password')) return false

  const { formData } = store
  const res = await S.signIn(formData)

  if (res.code === NET.ERR_CODE) {
    return store.toastError({ title: '登陆失败', msg: res.message })
  }
  return store.markState({ curView: 'SIGNIN_SUCCESS' })
}

export async function resetPassword() {
  const { formData } = store
  if (!store.validator('passwordReset')) return false

  const res = await S.resetPassword(formData)
  if (res.code === NET.ERR_CODE) {
    return store.toastError({ title: '重置失败', msg: res.message })
  }
  store.toastDone({ title: '重置成功', msg: '请重新登录' })
  return store.markState({ curView: 'SIGNIN' })
}

export const forgotPassword = () =>
  store.markState({ curView: 'FORGOT_PASS', password: '' })

// ###############################
// init & uninit
// ###############################

export const init = _store => {
  store = _store
}

export const uninit = () => {}
