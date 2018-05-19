'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const hbs = require('express-handlebars')
const expressSession = require('express-session')
// const passport = require('passport')
const cookieParser = require('cookie-parser')
// const auth = require('./middlewares/index')

require('dotenv').config()

require('./passport')
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
    saveUninitialized: true
  })
)
/* app.use(passport.initialize())
app.use(passport.session())

passport.deserializeUser(auth.deserializeUser)
passport.serializeUser(auth.serializeUser) */

app.engine(
  '.hbs',
  hbs({
    defaultLayout: 'default',
    extname: '.hbs'
  })
)

app.set('view engine', '.hbs')

app.use('/api', api)

app.get('/', function (req, res) {
  // res.status(200).send('Hola welcome');
  res.render('login')
})

app.get('/login', (req, res, next) => {
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

// app.get('/home', passport.authenticate('jwt', { session: false }), (req, res) => {
//   // res.setHeader('Authorization', `bearer ${localStorage.token}`)
//   res.render('home')
// })
app.get('/home', (req, res) => {
  res.render('home')
})

module.exports = app
