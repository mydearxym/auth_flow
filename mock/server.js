/* eslint-disable-next-line */
const jsonServer = require('json-server')
const server = jsonServer.create()
const middlewares = jsonServer.defaults()
// const config = require('../config')
const { dbHandler, rewriterHandler } = require('./handler')

const H = require('./actions')

// const mockPort = config.MOCK_SERVER_PORT // 3001

// TODO: commonjs can't require from es6 code
const mockPort = 3001
const delaySec = 1.5

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)
server.use('*', (req, res, next) => setTimeout(next, delaySec * 1000))

/* eslint-disable */
server.get('/echo', (req, res) => res.json(require('./data/user/login.json')))
server.get('/addPerson', (req, res) => H.employee.addPerson(req, res))
/* eslint-enable */

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server

// server.use(jsonServer.bodyParser)
// server.use((req, res, next) => {
//   if (req.method === 'POST') {
//     req.body.createdAt = Date.now()
//   }
//   // Continue to JSON Server router
//   next()
// })

// 获取db数据
const db = dbHandler('./data')

server.use(jsonServer.rewriter(rewriterHandler(db)))

// Use router
server.use(jsonServer.router(db))

server.listen(mockPort, () => {
  console.log('JSON Server is running on', mockPort)
})
