import { network } from 'utils'

async function signUp(params) {
  return network.post('/signup', params)
}

export default {
  signUp,
}
