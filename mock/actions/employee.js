/* eslint-disable global-require */

const addPerson = (req, res) => {
  return res.json({
    dude: 'frank3',
  })
}
/* eslint-enable global-require */

module.exports = {
  addPerson,
}
