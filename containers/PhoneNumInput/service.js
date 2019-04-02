import { network } from 'utils'

const CARRIER_SERVICE_API =
  'https://tcc.taobao.com/cc/json/mobile_tel_segment.htm?tel='

export async function getPhoneInfo(phone) {
  return network.get3rd(`${CARRIER_SERVICE_API}${phone}`)
}

export const holder = 1
