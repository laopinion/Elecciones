'use strict'

const express = require('express')
const api = express.Router()
const userCtrl = require('../controllers/user')
const auth = require('../middlewares/index')
const fileCtrl = require('../controllers/loadFile')
// const multer = require('multer')
// const upload = multer({ dest: 'uploads/' })

// Registro de un user
// api.post('/signup', userCtrl.signUp)

// Iniciar seseion
api.post('/signin', userCtrl.signIn, function (req, res) {
  // console.log('ok hola mundo', req.token)
  res.redirect('/home')
})

api.post('/loadfile', auth.isAuth, fileCtrl.loadFile)

api.get('/private', auth.isAuth, function (req, res, next) {
  // res.status(200).send({ message: 'Tienes acceso tu id ' + req.user })
  res.json('Success! You can not see this without a token')
})

api.get('/data/departamental', fileCtrl.jsonDepartamentalHttp)
api.get('/data/nacional', fileCtrl.jsonNacionalHttp)

module.exports = api
