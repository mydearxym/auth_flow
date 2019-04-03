import { network } from 'utils'

async function signIn(params) {
  return network.post('/signin', params)
}

async function resetPassword(params) {
  return network.post('/resetPassword', params)
}

export default {
  signIn,
  resetPassword,
}
