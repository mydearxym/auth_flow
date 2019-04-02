/* eslint-disable global-require */

const addPerson = (req, res) => {
  return res.json({
    dude: 'frank',
  })
}
/* eslint-enable global-require */

module.exports = {
  addPerson,
}
