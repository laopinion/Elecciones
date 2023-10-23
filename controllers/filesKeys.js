'use strict'
const path = require('path')
const fs = require('node:fs')

function partidos (req, res) {
  // console.log(path.resolve(__dirname, 'partidos-politicos.json'))
  fs.readFile(path.resolve(__dirname, 'files/partidos-politicos.json'), (err, data) => {
    if (err) return res.status(500).send({ message: 'Algo salio mal partidos politicos' + err, status: '500' })
    let listPartidos = JSON.parse(data)
    // console.log(listPartidos)
    return res.status(200).send({ status: '200', data: listPartidos })
  })
}

function partidosSenado (req, res) {
  // console.log(path.resolve(__dirname, 'partidos-politicos.json'))
  fs.readFile(path.resolve(__dirname, 'files/partidos-senado.json'), (err, data) => {
    if (err) return res.status(500).send({ message: 'Algo salio mal partidos senado' + err, status: '500' })
    let listPartidos = JSON.parse(data)
    // console.log(listPartidos)
    return res.status(200).send({ status: '200', data: listPartidos })
  })
}

function partidosCamara (req, res) {
  // console.log(path.resolve(__dirname, 'partidos-politicos.json'))
  fs.readFile(path.resolve(__dirname, 'files/partidos-camara.json'), (err, data) => {
    if (err) return res.status(500).send({ message: 'Algo salio mal partidos camara' + err, status: '500' })
    let listPartidos = JSON.parse(data)
    // console.log(listPartidos)
    return res.status(200).send({ status: '200', data: listPartidos })
  })
}

function candidatosSenado (req, res) {
  // console.log(path.resolve(__dirname, 'partidos-politicos.json'))
  fs.readFile(path.resolve(__dirname, 'files/candidatos-senado.json'), (err, data) => {
    if (err) return res.status(500).send({ message: 'Algo salio mal candidatos senado' + err, status: '500' })
    let listPartidos = JSON.parse(data)
    // console.log(listPartidos)
    return res.status(200).send({ status: '200', data: listPartidos })
  })
}

function candidatosCamara (req, res) {
  // console.log(path.resolve(__dirname, 'partidos-politicos.json'))
  fs.readFile(path.resolve(__dirname, 'files/candidatos-camara.json'), (err, data) => {
    if (err) return res.status(500).send({ message: 'Algo salio mal candidatos camara' + err, status: '500' })
    let listPartidos = JSON.parse(data)
    // console.log(listPartidos)
    return res.status(200).send({ status: '200', data: listPartidos })
  })
}

function candidatosPresidenciales (req, res) {
  // console.log(path.resolve(__dirname, 'partidos-politicos.json'))
  fs.readFile(path.resolve(__dirname, 'files/candidatos.json'), (err, data) => {
    if (err) return res.status(500).send({ message: 'Algo salio mal centro esperanza' + err, status: '500' })
    let listPartidos = JSON.parse(data)
    // console.log(listPartidos)
    return res.status(200).send({ status: '200', data: listPartidos })
  })
}

function departamentosCapitales (req, res) {
  // console.log(path.resolve(__dirname, 'partidos-politicos.json'))
  fs.readFile(path.resolve(__dirname, 'files/departamentos-capitales.json'), (err, data) => {
    if (err) return res.status(500).send({ message: 'Algo salio mal centro esperanza' + err, status: '500' })
    let listPartidos = JSON.parse(data)
    // console.log(listPartidos)
    return res.status(200).send({ status: '200', data: listPartidos })
  })
}

function geoJson (req, res) {
  // console.log(path.resolve(__dirname, 'partidos-politicos.json'))
  fs.readFile(path.resolve(__dirname, 'files/geo.json'), (err, data) => {
    if (err) return res.status(500).send({ message: 'Algo salio mal centro esperanza' + err, status: '500' })
    let listPartidos = JSON.parse(data)
    // console.log(listPartidos)
    return res.status(200).send({ status: '200', data: listPartidos })
  })
}

function candidatosAlcalde (_req, res) {
  fs.readFile(path.resolve(__dirname, 'files/candidatos-alcalde.json'), (err, data) => {
    if (err) return res.status(500).send({ message: 'Algo salio mal candidatos alcalde' + err, status: '500' })
    let listPartidos = JSON.parse(data)
    // console.log(listPartidos)
    return res.status(200).send({ status: '200', data: listPartidos })
  })
}

function candidatosGobernador (_req, res) {
  fs.readFile(path.resolve(__dirname, 'files/candidatos-gobernador.json'), (err, data) => {
    if (err) return res.status(500).send({ message: 'Algo salio mal candidatos gobernador' + err, status: '500' })
    let listPartidos = JSON.parse(data)
    // console.log(listPartidos)
    return res.status(200).send({ status: '200', data: listPartidos })
  })
}

function candidatosConcejo (_req, res) {
  fs.readFile(path.resolve(__dirname, 'files/candidatos-concejo.json'), (err, data) => {
    if (err) return res.status(500).send({ message: 'Algo salio mal candidatos concejo' + err, status: '500' })
    let listPartidos = JSON.parse(data)
    // console.log(listPartidos)
    return res.status(200).send({ status: '200', data: listPartidos })
  })
}

function candidatosAsamblea (_req, res) {
  fs.readFile(path.resolve(__dirname, 'files/candidatos-asamblea.json'), (err, data) => {
    if (err) return res.status(500).send({ message: 'Algo salio mal candidatos asamblea' + err, status: '500' })
    let listPartidos = JSON.parse(data)
    // console.log(listPartidos)
    return res.status(200).send({ status: '200', data: listPartidos })
  })
}

module.exports = {
  departamentosCapitales,
  candidatosPresidenciales,
  geoJson,
  partidos,
  partidosSenado,
  partidosCamara,
  candidatosCamara,
  candidatosSenado,
  candidatosAlcalde,
  candidatosGobernador,
  candidatosConcejo,
  candidatosAsamblea
}
