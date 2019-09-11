const express = require('express'); // import the express package
const instagram= require('passport-instagram');
const passport = require('passport');
const session= require('express-session');
const server = express(); // creates the server
const InstagramStrategy = instagram.Strategy;
require('dotenv').config();


server.use(passport.initialize());
server.use(session({secret:process.env.SESSION_SECRET}))
server.use(passport.session());

passport.serializeUser((user, done) => {
    done(null, user)
  })
  passport.deserializeUser((user, done) => {
    done(null, user)
  })


  passport.use(new InstagramStrategy({
    clientID: process.env.INSTAGRAM_CLIENT_ID,
    clientSecret: process.env.INSTAGRAM_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/auth/instagram/callback"
  }, (accessToken, refreshToken, profile, done) => {
   
  }))


// handle requests to the root of the api, the / route
server.get('/', (req, res) => {
  res.send('Hello from Express');
});


// watch for connections on port 5000
server.listen(5000, () =>
  console.log('Server running on http://localhost:5000')
);
