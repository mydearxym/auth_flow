import { network } from 'utils'

const CARRIER_SERVICE_API =
  'https://tcc.taobao.com/cc/json/mobile_tel_segment.htm?tel='

async function getPhoneInfo(phone) {
  return network.get3rd(`${CARRIER_SERVICE_API}${phone}`)
}

async function verifyPhoneCode(phone, code) {
  return network.get(`/verifyPhoneCode?phone=${phone}&code=${code}`)
}

export default {
  getPhoneInfo,
  verifyPhoneCode,
}
