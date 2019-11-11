passport = require('passport')

module.exports = function(server) {
server.get('/auth/instagram', (req, res, next) => {
  console.log(req.query)
  next()
}, passport.authenticate('instagram'));

server.get('/auth/instagram/callback',
  passport.authenticate('instagram', { failureRedirect: '/' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('http://localhost:3000/map');
  });
}