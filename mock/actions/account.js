/* eslint-disable global-require */

const signin = (req, res) => {
  return res.json({
    code: 1011,
    message: '请求成功',
    data: 'hello',
  })
}
/* eslint-enable global-require */

module.exports = {
  signin,
}
