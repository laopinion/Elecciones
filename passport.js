const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt

const UserModel = require('./models/user')
const config = require('./config')
const bcrypt = require('bcrypt-nodejs')

passport.use(new LocalStrategy(
  {
    usernameField: 'email',
    passwordField: 'password'
  },
  function (email, password, done) {
    // console.log('hola mundo localstrategy')
    UserModel.findOne({ email: email }, (err, user) => {
      if (err) return done(null, false, {message: err})

      if (!user) return done(null, false, {message: 'Incorrect email or password.'})

      // Primero la clave que esta enviando el request y la clave que esta en la database;
      bcrypt.compare(password, user.password, function (err, isMatch) {
        if (err) return done(null, false, {message: 'Authentication failed. Wrong password.'})

        if (isMatch) {
          return done(null, user, {message: 'Logged In Successfully'})
        } else {
          return done(null, false, {message: 'Authentication failed. Wrong password.'})
        }
      })
    })
  }
))

let opts = {}

// Setup JWT options
// opts.jwtFromRequest = ExtractJwt.fromAuthHeader()
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
opts.secretOrKey = config.SECRET_TOKEN

passport.use(
  new JwtStrategy(opts, function (jwtPayload, done) {
    // If the token has expiration, raise unauthorized
    var expirationDate = new Date(jwtPayload.exp * 1000)
    if (expirationDate < new Date()) {
      return done(null, false)
    }
    var user = jwtPayload
    done(null, user)
  })
)
