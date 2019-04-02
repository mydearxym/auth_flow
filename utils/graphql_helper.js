import R from 'ramda'

import { PAGE_SIZE } from 'config'
import { isString } from './validator'

export const asyncRes = R.curry((key, obj) => R.and(obj[key], R.has(key, obj)))
export const asyncErr = key => R.pathEq(['error'], key)

export const pagedFilter = (page, options = {}) =>
  R.merge({ page, size: PAGE_SIZE.D }, options)

/*
 * map value(string) to UPPER case for server absinthe-atom format
 * e.p: is server required :post, front-end should pass "POST"
 */
export const atomizeValues = _obj => {
  const obj = R.clone(_obj)

  Object.keys(obj).forEach(k => {
    if (isString(obj[k])) {
      obj[k] = R.toUpper(obj[k])
    }
  })

  return obj
}

// NOTE: this is a simple hack for send parallel requests in rxjs
// in rxjs, if you want to send parallel request you should use complex method
// like forkJoin .. which need to refactor whole sr71 part
// currently the simple later is fine
export const later = (func, time = 200) => setTimeout(func, time)
