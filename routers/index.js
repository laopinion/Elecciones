'use strict'

const express = require('express')
const api = express.Router()
const userCtrl = require('../controllers/user')
const auth = require('../middlewares/index')
const fileCtrl = require('../controllers/loadFile')
const filesKeysCtrl = require('../controllers/filesKeys')
// const multer = require('multer')
// const upload = multer({ dest: 'uploads/' })

// Registro de un user comentar al pasar a producción
// api.post('/signup', userCtrl.signUp)

// Iniciar seseion
api.post('/signin', userCtrl.signIn, function (_req, res) {
  // console.log('ok hola mundo', req.token)
  res.redirect('/home')
})

api.post('/loadfile', auth.isAuth, fileCtrl.loadFile)

api.get('/private', auth.isAuth, function (_req, res, next) {
  // res.status(200).send({ message: 'Tienes acceso tu id ' + req.user })
  res.json('Success! You can not see this without a token')
})

// api.get('/data/camara-nacional', fileCtrl.jsonCamaraNacional)
// api.get('/data/camara-departamental', fileCtrl.jsonCamaraDepartamental)
api.get('/data/alcalde', fileCtrl.jsonAlcalde)
api.get('/data/gobernador', fileCtrl.jsonGobernador)
api.get('/data/concejo', fileCtrl.jsonConcejo)
api.get('/data/asamblea', fileCtrl.jsonAsamblea)

api.get('/data/candidatos-alcalde', filesKeysCtrl.candidatosAlcalde)
api.get('/data/candidatos-gobernador', filesKeysCtrl.candidatosGobernador)
api.get('/data/candidatos-concejo', filesKeysCtrl.candidatosConcejo)
api.get('/data/candidatos-asamblea', filesKeysCtrl.candidatosAsamblea)
// api.get('/data/geo-departamentos', filesKeysCtrl.geoJson)

module.exports = api
