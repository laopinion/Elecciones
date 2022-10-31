'use strict'

const express = require('express')
const axios = require('axios')
const xml2js = require('xml2js')
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
api.post('/signin', userCtrl.signIn, function (req, res) {
  // console.log('ok hola mundo', req.token)
  res.redirect('/home')
})

api.post('/loadfile', auth.isAuth, fileCtrl.loadFile)

api.get('/private', auth.isAuth, function (req, res, next) {
  // res.status(200).send({ message: 'Tienes acceso tu id ' + req.user })
  res.json('Success! You can not see this without a token')
})

// api.get('/data/camara-nacional', fileCtrl.jsonCamaraNacional)
// api.get('/data/camara-departamental', fileCtrl.jsonCamaraDepartamental)
api.get('/data/presidenciales-nacional', fileCtrl.jsonPresiNacional)
api.get('/data/presidenciales-municipios', fileCtrl.jsonPresiMunicipios)
api.get('/data/presidenciales-departamental', fileCtrl.jsonPresiDepartamental)

// api.get('/data/senado-nacional', fileCtrl.jsonSenadoNacional)
// api.get('/data/senado-departamental', fileCtrl.jsonCamaraDepartamental)

// api.get('/data/centro-esperanza', fileCtrl.jsonCentroEsperanza)
// api.get('/data/pacto-historico', fileCtrl.jsonPactoHistorico)
// api.get('/data/equipo-colombia', fileCtrl.jsonEquipoColombia)
// api.get('/data/partidos', filesKeysCtrl.partidos)
// api.get('/data/partidos-senado', filesKeysCtrl.partidosSenado)
// api.get('/data/partidos-camara', filesKeysCtrl.partidosCamara)
// api.get('/data/candidatos-senado', filesKeysCtrl.candidatosSenado)
// api.get('/data/candidatos-camara', filesKeysCtrl.candidatosCamara)
// api.get('/data/candidatos-pacto-historico', filesKeysCtrl.candidatosPactoHistorico)
// api.get('/data/candidatos-centro-esperanza', filesKeysCtrl.candidatosCentroEsperanza)
// api.get('/data/candidatos-equipo-colombia', filesKeysCtrl.candidatosEquipoColombia)
api.get('/data/candidatos-presidenciales', filesKeysCtrl.candidatosPresidenciales)
api.get('/data/departamentos-capitales', filesKeysCtrl.departamentosCapitales)
api.get('/data/geo-departamentos', filesKeysCtrl.geoJson)
api.get('/data/clasificados-casas', function(req, res){
  axios.get('https://clasificados.laopinion.com.co/import/CasasXML.xml')
  .then(function (response) { 
    let parseString = xml2js.parseString;
      parseString(response.data, function (err, result) {
        console.log(result); 
        res.status(200).send(result);       
      });
  })
  .catch(function (error) {    
    console.log(error);
  });
})

api.get('/data/clasificados-apartamentos', function(req, res){
  axios.get('https://clasificados.laopinion.com.co/import/Apartamento_ApartaestudioXML.xml')
  .then(function (response) { 
    let parseString = xml2js.parseString;
      parseString(response.data, function (err, result) {
        console.log(result); 
        res.status(200).send(result);       
      });
  })
  .catch(function (error) {    
    console.log(error);
  });
})

api.get('/data/clasificados-empleos-especializados', function(req, res){
  axios.get('https://clasificados.laopinion.com.co/import/Empleos_EspecializadosXML.xml')
  .then(function (response) { 
    let parseString = xml2js.parseString;
      parseString(response.data, function (err, result) {
        console.log(result); 
        res.status(200).send(result);       
      });
  })
  .catch(function (error) {    
    console.log(error);
  });
})

api.get('/data/clasificados-empleos-otros', function(req, res){
  axios.get('https://clasificados.laopinion.com.co/import/Empleos_OtrosXML.xml')
  .then(function (response) { 
    let parseString = xml2js.parseString;
      parseString(response.data, function (err, result) {
        console.log(result); 
        res.status(200).send(result);       
      });
  })
  .catch(function (error) {    
    console.log(error);
  });
})

api.get('/data/clasificados-servicios', function(req, res){
  axios.get('https://clasificados.laopinion.com.co/import/Varios_serviciosXML.xml')
  .then(function (response) { 
    let parseString = xml2js.parseString;
      parseString(response.data, function (err, result) {
        console.log(result); 
        res.status(200).send(result);       
      });
  })
  .catch(function (error) {   
    console.log(error);
  });
})
  


module.exports = api
