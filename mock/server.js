/* eslint-disable-next-line */
const jsonServer = require('json-server')
/* eslint-disable-next-line */
const bodyParser = require('body-parser')
const server = jsonServer.create()
const middlewares = jsonServer.defaults({ cors: false })
// const config = require('../config')
const { dbHandler, rewriterHandler } = require('./handler')

const A = require('./actions')

// const mockPort = config.MOCK_SERVER_PORT // 3001

// TODO: commonjs can't require from es6 code
const mockPort = 3001
const delaySec = 0.5

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

// parse application/x-www-form-urlencoded
server.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
server.use(bodyParser.json())
server.use('*', (req, res, next) => setTimeout(next, delaySec * 1000))

/* eslint-disable */
server.get('/echo', (req, res) => res.json(require('./data/user/login.json')))
server.post('/signin', (req, res) => A.account.signin(req, res))
server.post('/signup', (req, res) => A.account.signup(req, res))
server.post('/resetPassword', (req, res) => A.account.resetPassword(req, res))
server.get('/verifyPhoneCode', (req, res) =>
  A.account.verifyPhoneCode(req, res)
)
/* eslint-enable */

// 获取db数据
const db = dbHandler('./data')

server.use(jsonServer.rewriter(rewriterHandler(db)))

// Use router
server.use(jsonServer.router(db))

server.listen(mockPort, () => {
  console.log('JSON Server is running on', mockPort)
})
