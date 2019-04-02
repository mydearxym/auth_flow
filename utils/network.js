import fetch from 'isomorphic-fetch'
import fetchJsonp from 'fetch-jsonp'

const endpoint = 'http://localhost:3001'

const post = (path, params) => {
  return fetch(`${endpoint}${path}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  })
    .then(r => r.json())
    .catch(e => {
      console.log('e: ', e)
    })
}

const get = path => {
  return fetch(`${endpoint}${path}`).then(r => r.json())
}

const get3rd = url => fetchJsonp(`${url}`).then(r => r.json())

const network = {
  post,
  get,
  get3rd,
}

export default network
