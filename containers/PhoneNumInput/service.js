/* import fetch from 'isomorphic-fetch' */
import fetchJsonp from 'fetch-jsonp'

/* const CARRIER_SERVICE_API = 'http://apis.juhe.cn/mobile/get' */
const CARRIER_SERVICE_API =
  'https://tcc.taobao.com/cc/json/mobile_tel_segment.htm?tel='

export const getQuery = api => fetchJsonp(`${api}`).then(r => r.json())

export async function getPhoneInfo(phone) {
  /* const key = '5cbd09c85e685675ffbe709871f9d82e' */
  // apis.juhe.cn/mobile/get?phone=13429667914&key=您申请的KEY

  /* return getQuery(`${CARRIER_SERVICE_API}?phone=${phone}&key=${key}`) */
  return getQuery(`${CARRIER_SERVICE_API}${phone}`)
}
