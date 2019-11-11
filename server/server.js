const express = require('express'); // import the express package
const passport = require('passport');
const instagram= require('passport-instagram');
const session= require('express-session');
const bodyParser = require('body-parser');
var cors = require('cors');


const server = express(); // creates the server
const InstagramStrategy = instagram.Strategy;
require('dotenv').config();

const tripController = require('./controller/trip')
const userController = require('./controller/user')
const authController = require('./controller/auth')

server.use(cors())
server.use(passport.initialize());
server.use(session({
  secret: 'sytr456-65tyrd-12wrt',
  resave: true, 
  saveUninitialized: true
}))
server.use(passport.session());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.disable('etag');

passport.serializeUser((user, done) => {
    console.log("done1")
    done(null, user)
})
passport.deserializeUser((user, done) => {
  console.log("done2")
    done(null, user)
})

console.log(process.env.INSTAGRAM_CLIENT_ID)
console.log(process.env.INSTAGRAM_CLIENT_SECRET)
passport.use(new InstagramStrategy({
  clientID: process.env.INSTAGRAM_CLIENT_ID,
  clientSecret: process.env.INSTAGRAM_CLIENT_SECRET,
  callbackURL: "http://localhost:5000/auth/instagram/callback"
}, (accessToken, refreshToken, profile, done) => {

    console.log(profile, accessToken, refreshToken)
    // To keep the example simple, the user's Instagram profile is returned to
    // represent the logged-in user.  In a typical application, you would want
    // to associate the Instagram account with a user record in your database,
    // and return that user instead.
    return done(null, profile);
}));


// handle requests to the root of the api, the / route
server.get('/', (req, res) => {
  res.send('Hello from Express');
});

//routes
tripController(server);
userController(server);
authController(server);
// watch for connections on port 5000
server.listen(5000, () =>
  console.log('Server running on http://localhost:5000')
);
