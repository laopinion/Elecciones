'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const hbs = require('express-handlebars')
// const expressSession = require('express-session')
// const passport = require('passport')
// const cookieParser = require('cookie-parser')
// const auth = require('./middlewares/index')
const fileUpload = require('express-fileupload')
const fileCtrl = require('./controllers/loadFile')

require('dotenv').config()

require('./passport')
const api = require('./routers')
const app = express()

const server = require('http').Server(app)
const io = require('socket.io')(server)

/* var messages = [
  {
    id: 1,
    text: 'Hola soy un mensaje',
    author: 'Carlos Azaustre'
  }
] */

io.on('connection', function (socket) {
  console.log('a user connected')
  // socket.emit('messages', messages)
  fileCtrl
    .jsonNacional()
    .then(function (data) {
      // console.log(data)
      socket.emit('data-nacional', data)
    })
    .catch(function (err) {
      console.warn(err)
    })

  fileCtrl
    .jsonDepartamental()
    .then(function (data) {
      // console.log(data)
      socket.emit('data-departamental', data)
    })
    .catch(function (err) {
      console.warn(err)
    })

  socket.on('load-file', function (option) {
    // messages.push(data)
    console.log('load file complete', option)
    if (option === 'Nacional') {
      fileCtrl
        .jsonNacional()
        .then(function (data) {
          // console.log(data)
          io.sockets.emit('data-nacional', data)
          // io.emit('hi', 'everyone'); // short form
        })
        .catch(function (err) {
          console.warn(err)
        })
    } else {
      fileCtrl
        .jsonDepartamental()
        .then(function (data) {
          // console.log(data)
          io.sockets.emit('data-departamental', data)
        })
        .catch(function (err) {
          console.warn(err)
        })
    }
    // io.sockets.emit('messages', messages)
  })
})

app.use(fileUpload())
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
/* app.use(cookieParser())
app.use(
  expressSession({
    secret: process.env.JWT,
    resave: false,
    saveUninitialized: true
  })
) */

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

// app.get('/home', passport.authenticate('jwt', { session: false }), (req, res) => {
//   // res.setHeader('Authorization', `bearer ${localStorage.token}`)
//   res.render('home')
// })
app.get('/home', (req, res) => {
  res.render('home')
})

app.get('/data', (req, res) => {
  res.render('viewdata')
})

// module.exports = {
//   server,
//   io
// }
module.exports = server
