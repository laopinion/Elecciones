const passport = require('passport')
const UserModel = require('../models/user')

function isAuth (req, res, next) {
  console.log(req.headers)
  if (req.headers.authorization) {
    passport.authenticate('jwt', { session: false }, function (err, user, info) {
      if ((!err || !info) && user) {
        req.user = user
        return next()
      }
      res.status(401).json({authenticated: false, message: 'Login expired.'})
    })(req, res, next)
  } else {
    if (req.isAuthenticated()) { return next() }
    res.status(401).json({authenticated: false})
  }
}

function serializeUser (user, done) {
  done(null, {
    email: user.email,
    token: user.token
  })
}

function deserializeUser (user, done) {
  UserModel.findOne({ email: user.email }, (err, user) => {
    if (err) return done(err)
    user.token = user.token
    // console.log(user)
    done(null, user)
  })
}

module.exports = {isAuth, serializeUser, deserializeUser}
