import { network } from 'utils'

export async function signIn(params) {
  return network.post('/signin', params)
}

export async function verifyPhoneCode(params) {
  return network.post('/signin', params)
}
