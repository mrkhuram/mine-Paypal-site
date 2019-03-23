
var Users = require('../models/sendMoney')


module.exports = function (server) {
server.get('/sendMoney', (req, res) => {
  Users.
      find({
          email: req.body.email,
          
      }).

      exec(function (err, users) {
          if (err) {
              return res.json({ success: false, err: err })
          }
          res.json({ success: true, data: users })
      });
})
}