'use strict'
const path = require('path')
const fs = require('fs')

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

function candidatosPactoHistorico (req, res) {
  // console.log(path.resolve(__dirname, 'partidos-politicos.json'))
  fs.readFile(path.resolve(__dirname, 'files/candidatos-pacto-historico.json'), (err, data) => {
    if (err) return res.status(500).send({ message: 'Algo salio mal pacto historico' + err, status: '500' })
    let listPartidos = JSON.parse(data)
    // console.log(listPartidos)
    return res.status(200).send({ status: '200', data: listPartidos })
  })
}

function candidatosCentroEsperanza (req, res) {
  // console.log(path.resolve(__dirname, 'partidos-politicos.json'))
  fs.readFile(path.resolve(__dirname, 'files/candidatos-centro-esperanza.json'), (err, data) => {
    if (err) return res.status(500).send({ message: 'Algo salio mal centro esperanza' + err, status: '500' })
    let listPartidos = JSON.parse(data)
    // console.log(listPartidos)
    return res.status(200).send({ status: '200', data: listPartidos })
  })
}

function candidatosEquipoColombia (req, res) {
  // console.log(path.resolve(__dirname, 'partidos-politicos.json'))
  fs.readFile(path.resolve(__dirname, 'files/candidatos-por-colombia.json'), (err, data) => {
    if (err) return res.status(500).send({ message: 'Algo salio mal centro esperanza' + err, status: '500' })
    let listPartidos = JSON.parse(data)
    // console.log(listPartidos)
    return res.status(200).send({ status: '200', data: listPartidos })
  })
}

module.exports = {
  partidos,
  partidosSenado,
  partidosCamara,
  candidatosSenado,
  candidatosCamara,
  candidatosPactoHistorico,
  candidatosCentroEsperanza,
  candidatosEquipoColombia
}
