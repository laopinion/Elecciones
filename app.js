'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const hbs = require('express-handlebars')
const expressSession = require('express-session')
const passport = require('passport')
const cookieParser = require('cookie-parser')
// const LocalStrategy = require('passport-local').Strategy
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
// const User = require('./models/user')
const config = require('./config')

require('dotenv').config()

const api = require('./routers')
const app = express()

// Esto se agrego por un mensaje de advertencia
// require('events').EventEmitter.defaultMaxListeners = Infinity;

// Documentación https://enable-cors.org/server_expressjs.html
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  )
  next()
})

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static('public'))
app.use(cookieParser())
app.use(
  expressSession({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
  })
)
app.use(passport.initialize())
app.use(passport.session())

// passport.serializeUser(function serializeUser (user, done) {
//   // en este caso solo mandamos el username y el token que se va necesitar para poder validar que si es un usuario correcto para hacer las peticiones a la api.
//   // En conclucion el token de JWT se usa para validar las peticiones de mi API
//   done(null, {
//     username: user.username,
//     token: user.token
//   })
// })

// passport.deserializeUser(function deserializeUser (user, done) {
//   User.findOne({ email: user.email }, (err, user) => {
//     if (err) return done(err)
//     user.token = user.token
//     // console.log(user)
//     done(null, user)
//   })
// })

// passport.use(
//   new LocalStrategy(
//     {
//       usernameField: 'email',
//       passwordField: 'password'
//     },
//     function (email, password, done) {
//       // Primero la clave que esta enviando el request y la clave que esta en la database;
//       /* bcrypt.compare(req.body.password, user.password, function (err, isMatch) {
//       if (err) return res.status(404).send({ message: 'Authentication failed. Wrong password.' })

//       if (isMatch) {
//         req.user = user
//         res.status(200).send({
//           message: 'Te has logeado correctamente ' + req.user.displayName,
//           token: service.createToken(user),
//           status: 'success'
//         })
//       } else {
//         res.status(404).send({ message: 'Authentication failed. Wrong password.' })
//       }
//     }) */
//       return User.findOne({ email, password })
//         .then(user => {
//           if (!user) {
//             return done(null, false, { message: 'Incorrect email or password.' })
//           }

//           return done(null, user, {
//             message: 'Logged In Successfully'
//           })
//         })
//         .catch(err => {
//           return done(err)
//         })
//     }
//   )
// )

app.engine(
  '.hbs',
  hbs({
    defaultLayout: 'default',
    extname: '.hbs'
  })
)

app.set('view engine', '.hbs')

app.use('/api', api)

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

app.get('/', function (req, res) {
  // res.status(200).send('Hola welcome');
  res.render('login')
})

app.get('/login', (req, res) => {
  res.render('login')
})

app.get('/signup', (req, res) => {
  res.render('signup')
})

app.get(
  '/secretDebug',
  function (req, res, next) {
    console.log(req.get('Authorization'))
    next()
  },
  function (req, res) {
    res.json('debugging')
  }
)

app.get('/home', (req, res) => {
  res.render('home')
})

module.exports = app
