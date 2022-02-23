'use strict'

// const mongoose = require('mongoose')
// const bcrypt = require('bcrypt-nodejs')
const User = require('../models/user')
const service = require('../services')
const passport = require('passport')
const jwt = require('jsonwebtoken')
const config = require('../config')

// Registro de un user
function signUp(req, res) {
  // console.log('data del user a crear -> ', req.body.email);
  const user = new User({
    email: req.body.email,
    displayName: req.body.displayName,
    password: req.body.password,
  })

  user.save((err) => {
    if (err) res.status(500).send({ message: 'Error al crear el usuario: ' + err })

    return res.status(200).send({ token: service.createToken(user) })
  })
}

// Inicio de sesión de un user
function signIn(req, res, next) {
  // console.log(req.body)
  passport.authenticate('local', (err, user, info) => {
    // console.log(user)
    if (err) return next(err)
    if (!user) {
      return res.status(401).json({ status: 'error', code: 'unauthorized' })
    } else {
      return res.json({ token: jwt.sign({ id: user.id }, config.SECRET_TOKEN) })
    }
  })(req, res)
}

module.exports = {
  signUp,
  signIn,
}
