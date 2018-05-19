'use strict'

const express = require('express')
const api = express.Router()
// const auth = require('../middlewares/auth')
// const notifiCtrl = require('../controllers/notifications');
const userCtrl = require('../controllers/user')
const passport = require('passport')

// api.get('/createToken/:token', notifiCtrl.createToken);

// Registro de un user
api.post('/signup', userCtrl.signUp)

// Iniciar seseion
api.post('/signin', userCtrl.signIn)

api.get('/private', passport.authenticate('jwt', { session: false }), function (req, res) {
  // res.status(200).send({ message: 'Tienes acceso tu id ' + req.user })
  res.json('Success! You can not see this without a token')
})

module.exports = api
